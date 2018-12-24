<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# hacker

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Travis Build Status][travis-image]][travis-url] [![AppVeyor Build Status][appveyor-image]][appveyor-url] [![Gitter chat][gitter-image]][gitter-url]

Hack on your project easily. A [liftoff](https://github.com/gulpjs/liftoff) proof-of-concept.

### How to use it

1. Install globally with `npm install -g hacker`.
2. Write your `Hackerfile`.
3. Run `hacker` in your project directory.
4. The rest is up to you.

#### Options
- `--cwd` specify the working directory to run hacker
- `--hackerfile` specify an exact hackerfile path
- `--require` require an external module before loading your hackerfile
- `--verbose` show some debugging info about how hacker is working

### Examples

#### Hackerfile.js
```js
var fs = require('fs');
fs.writeFileSync('tmp','i will be written relative to this file, always.');
```
To run:
`hacker`

#### Hackerfile.coffee
```coffeescript
fs = require 'fs'
fs.writeFileSync 'tmp', 'i will be written relative to this file, always.'
```
To run:
`hacker`

## License

MIT

[downloads-image]: http://img.shields.io/npm/dm/hacker.svg
[npm-url]: https://www.npmjs.com/package/hacker
[npm-image]: http://img.shields.io/npm/v/hacker.svg

[travis-url]: https://travis-ci.org/gulpjs/hacker
[travis-image]: http://img.shields.io/travis/gulpjs/hacker.svg?label=travis-ci

[appveyor-url]: https://ci.appveyor.com/project/gulpjs/hacker
[appveyor-image]: https://img.shields.io/appveyor/ci/gulpjs/hacker.svg?label=appveyor

[gitter-url]: https://gitter.im/gulpjs/gulp
[gitter-image]: https://badges.gitter.im/gulpjs/gulp.svg
