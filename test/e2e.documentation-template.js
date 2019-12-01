const renderScreenshot = ({
  title = '',
  slug = '',
  pageIndex = 0,
  screenshotPath = '',
  description = '',
}) => `<figure id="${slug}-${pageIndex}">
  <img src="${screenshotPath}" title="${title}" />
  <figcaption>${description}</figcaption>
</figure>`;

const renderSection = ({
  title = '',
  slug = '',
  screenshots = [],
}) => `<section id="${slug}">
  <header>
    <h1>${title}</h1>
  </header>
  <div class="content">
    <div class="screenshots">
      ${screenshots.map(renderScreenshot).join('\n')}
    </div>
    <div class="description">
    </div>
  </div>
  </div>
</section>`;

module.exports = async ({
  title = 'Documentation',
  info = {},
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

${info.map(renderSection).join('\n')}

</body>
</html>`;
