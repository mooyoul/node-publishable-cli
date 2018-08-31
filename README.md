# node-publishable-cli

[![Build Status](https://travis-ci.org/mooyoul/node-publishable.svg?branch=master)](https://travis-ci.org/mooyoul/node-publishable)
[![Coverage Status](https://coveralls.io/repos/github/mooyoul/node-publishable/badge.svg?branch=master)](https://coveralls.io/github/mooyoul/node-publishable?branch=master)
[![codecov.io](https://codecov.io/github/mooyoul/node-publishable/coverage.svg?branch=master)](https://codecov.io/github/mooyoul/node-publishable?branch=master)
[![Dependency Status](https://david-dm.org/mooyoul/node-publishable.svg)](https://david-dm.org/mooyoul/node-publishable)
[![devDependency Status](https://david-dm.org/mooyoul/node-publishable/dev-status.svg)](https://david-dm.org/mooyoul/node-publishable#info=devDependencies)
[![MIT license](http://img.shields.io/badge/license-MIT-blue.svg)](http://mooyoul.mit-license.org/)

Checks if a package is publishable to NPM registry (with private package support!)


## Sponsor

- [Vingle](https://www.vingle.net) - Vingle, Very Community. Love the things that you love. - [We're hiring!](https://careers.vingle.net/#/engineering/backend)


## Install

```bash
$ npm install publishable-cli
```
 
 
## Usage

```bash
$ publishable && echo "^0^ this package can be published to npm registry"
$ publishable && npm publish
```

```bash
$ publishable || echo "T_T this pacakge shouldn't be published to npm registry..."
```

# Related

- [mooyoul/node-publishable](https://github.com/mooyoul/node-publishable) - API for this module 


## Changelog

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
