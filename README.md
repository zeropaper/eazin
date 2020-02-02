## Usage

### Back-end

TODO

### Front-end

TODO

## Packages

Sources are in the `packages` directory of the repository.

### Structure

TODO

### Output

TODO

### Custom Package Authoring

TODO

## Development

For development of this (the root) project, the command will
start a back-end and front-end development servers running
in parallel.

```
npm start
```

## Test

```
npm test
```

You need to **start a development server** (`npm start`) and set the `PORT` environment variable in order to run the E2E tests in watch mode.

```
npm run build:html && npm run watch:test:e2e
```

```
TEST_KEEP_BROWSER=1 PORT=5000 npm run watch:test:e2e
```

## Publishing

```
npm run lerna:publish
```
