<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# hacker

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][ci-image]][ci-url] [![Coveralls Status][coveralls-image]][coveralls-url]

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
fs.writeFileSync('tmp', 'i will be written relative to this file, always.');
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

## Strict No LLM / No AI Policy

No LLMs for issues.

No LLMs for patches / pull requests.

No LLMs for comments on the bug tracker, including translation.

English is encouraged, but not required. You are welcome to post in your native language and rely on others to have their own translation tools of choice to interpret your words.

## License

MIT

<!-- prettier-ignore-start -->
[downloads-image]: https://img.shields.io/npm/dm/hacker.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/hacker
[npm-image]: https://img.shields.io/npm/v/hacker.svg?style=flat-square

[ci-url]: https://github.com/gulpjs/hacker/actions/workflows/dev.yml
[ci-image]: https://img.shields.io/github/actions/workflow/status/gulpjs/hacker/dev.yml?style=flat-square

[coveralls-url]: https://coveralls.io/r/gulpjs/hacker
[coveralls-image]: https://img.shields.io/coveralls/gulpjs/hacker/main.svg?style=flat-square
<!-- prettier-ignore-end -->
