const path = require('path');

const stateTitle = (state) => (state.parent && state.parent.name !== 'ROOT_DESCRIBE_BLOCK'
  ? `${stateTitle(state.parent)} > ${state.name}`
  : state.name);

module.exports = async ({
  title = 'E2E Results',
  info = [],
  outputDirectory = (process.env.PWD || __dirname),
} = {}) => `<html>
<head>
  <title>${title}</title>
  <style>
section .content {
  display: flex;
}
section .screenshots,
section .description {
  flex-grow: 1;
  width: 50%;
}
section figure,
section img {
  max-width: 100%;
}
  </style>
</head>

<body>
<header>
  <h1>${title}</h1>
</header>

${info.map(({
    state,
    slug,
    screenshotPaths,
  }) => `<section id="${slug}" class="${state.errors.length ? 'error' : 'success'}">
  <header>
    <h1>${stateTitle(state)}</h1>
  </header>

  <div class="content">
    <div class="screenshots">
      ${screenshotPaths.map((screenshotPath) => `<figure>
        <img src="./${path.relative(outputDirectory, screenshotPath)}" />
      </figure>`).join('\n')}
    </div>

    <div class="description">
      // TODO
    </div>
  </div>
</section>`).join('\n')}

</body>
</html>`;
