# hacker
> Hack on your project easily.

### How to use it

1. Install globally with `npm install -g hacker`.
2. Write your `Hackfile`.
3. Run `hacker` in your project directory.
4. The rest is up to you.

#### Options
- `--cwd` specify the working directory to start looking for your Hackfile
- `--require` require an external module before loading your hackfile (e.g. coffee-script)
- `---verbose` show some debugging info about how hacker is working

### Examples

#### Hackfile.js
```js
var fs = require('fs');
fs.writeFileSync('tmp','i will be written relative to this file, always.');
```
To run:
`hacker`

#### Hackfile.coffee
```coffeescript
fs = require 'fs'
fs.writeFileSync 'tmp', 'i will be written relative to this file, always.'
```
To run:
`hacker --require coffee-script`
