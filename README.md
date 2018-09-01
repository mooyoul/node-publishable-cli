# node-publishable-cli

[![Build Status](https://travis-ci.org/mooyoul/node-publishable-cli.svg?branch=master)](https://travis-ci.org/mooyoul/node-publishable-cli)
[![Dependency Status](https://david-dm.org/mooyoul/node-publishable-cli.svg)](https://david-dm.org/mooyoul/node-publishable-cli)
[![devDependency Status](https://david-dm.org/mooyoul/node-publishable-cli/dev-status.svg)](https://david-dm.org/mooyoul/node-publishable-cli#info=devDependencies)
[![MIT license](http://img.shields.io/badge/license-MIT-blue.svg)](http://mooyoul.mit-license.org/)

Checks if a package is publishable to NPM registry (with private package support!),
Made for CI/CD Workflow of NPM packages. 


## Sponsor

- [Vingle](https://www.vingle.net) - Vingle, Very Community. Love the things that you love. - [We're hiring!](https://careers.vingle.net/#/engineering/backend)


## Install

```bash
$ npm install publishable-cli
```
 
 
## Usage

```bash
$ publishable && echo "^0^ this package can be published to npm registry"
```

```bash
$ publishable || echo "T_T this pacakge shouldn't be published to npm registry..."
```

For CI/CD Workflows:

```bash
$ publishable && npm publish # publish only given spec haven't published to registry
$ publishable && npm publish || echo "Package does not seems publishable. Skipping publish step."
```

# Related

- [mooyoul/node-publishable](https://github.com/mooyoul/node-publishable) - API for this module 


## Changelog

#### 1.0.1

- Fixed broken package deployment

#### 1.0.0

- Verison Bump

#### 0.1.0

- Initial commit

## Debugging

Set `DEBUG` environment variable to `publishable`.
You will be able to see debug messages on your console.

> $ env DEBUG='publishable' node your-app.js
 

## Testing

```bash
$ npm run test
```

... OR

```bash
$ npm run lint # Check lint
```


## Build

```bash
$ npm run build
```


## License
[MIT](LICENSE)

See full license on [mooyoul.mit-license.org](http://mooyoul.mit-license.org/)
