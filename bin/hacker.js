#!/usr/bin/env node
'use strict';

var Liftoff = require('liftoff');

var Hacker = new Liftoff({
  moduleName: 'hacker',
  configName: 'hackfile',
  cwdOpt: 'cwd',
  requireOpt: 'require'
}).on('require', function (name, module) {
  // register coffeescript extensions
  if (name === 'coffee-script') {
    module.register();
  }
}).on('requireFail', function (name, err) {
  console.log('Unable to load:', name, err);
}).on('run', function () {
  if(this.configPath) {
    process.chdir(this.configBase);
    require(this.configPath);
  } else {
    console.log('No Hackfile found.');
  }
});

Hacker.launch();
