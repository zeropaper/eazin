## Usage

### Back-end

TODO

### Front-end

TODO

## NPM packages

Packages are published to NPM.
Sources are in the `src/packages` directory of the repository.

## Dev packages

The packages which are located in the `src/dev` directory are not meant to be published to NPM

### Structure

Each "packages" should follow the following scaffolding:
* Can have a `server` directory
* Can have a `ui` directory

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



Coding rules

Server

The models hold the business logic.
The routers are meant to prepare data for document manipulation.

To add features to a model, eazin plugins use the mongoose plugin mechanism.
