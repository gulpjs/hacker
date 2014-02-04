#!/usr/bin/env node
'use strict';

var Liftoff = require('liftoff');

var Hacker = new Liftoff({
  name: 'hacker',
//  localDeps: ['hacker'],     // these are assigned
//  configName: 'hackerfile',  // automatically by
//  processTitle: 'hacker',    // the "name" option
  cwdOpt: 'cwd',
  requireOpt: 'require'
}).on('require', function (name, module) {
  if (name === 'coffee-script') {
    module.register();
  }
}).on('requireFail', function (name, err) {
  console.log('Unable to load:', name, err);
});

Hacker.launch(function() {
  if(this.argv.verbose) {
    console.log('LIFTOFF SETTINGS:', this.liftoff);
    console.log('CLI OPTIONS:', this.argv);
    console.log('CWD:', this.cwd);
    console.log('LOCAL MODULES PRELOADED:', this.preload);
    console.log('EXTENSIONS RECOGNIZED:', this.validExtensions);
    console.log('SEARCHING FOR:', this.configNameRegex);
    console.log('FOUND CONFIG AT:',  this.configPath);
    console.log('CONFIG BASE DIR:', this.configBase);
    console.log('YOUR LOCAL MODULE IS LOCATED:', this.modulePath);
    console.log('LOCAL PACKAGE.JSON:', this.localPackage);
    console.log('CLI PACKAGE.JSON', require('../package'));
  }

  if(this.configPath) {
    process.chdir(this.configBase);
    require(this.configPath);
  } else {
    console.log('No Hackfile found.');
  }
});
