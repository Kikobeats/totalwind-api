# totalwind-api

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/totalwind-api.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/totalwind-api.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/Kikobeats/totalwind-api/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/totalwind-api)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/totalwind-api.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/totalwind-api)
[![Dependency status](http://img.shields.io/david/Kikobeats/totalwind-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/totalwind-api)
[![Dev Dependencies Status](http://img.shields.io/david/dev/Kikobeats/totalwind-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/totalwind-api#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/totalwind-api.svg?style=flat-square)](https://www.npmjs.org/package/totalwind-api)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Programatic API access for totalwind.net

## Install

```bash
$ npm install totalwind-api --save
```

## Usage

```js
var totalwind = require('totalwind-api')

var client = totalwind({
  key: process.env.API_KEY, // API Key credentials
  pages: 3 // Numbers or request per each method call
})
```

## License

MIT © [Kiko Beats](http://kikobeats.com)
