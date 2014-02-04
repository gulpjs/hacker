#!/usr/bin/env node
'use strict';

var Liftoff = require('liftoff');

var Hacker = new Liftoff({
  localDeps: ['hacker'],
  configName: 'hackerfile',
  processTitle: 'hacker',
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
  if(this.args.verbose) {
    console.log('CLI OPTIONS:', this.args);
    console.log('CWD:', this.cwd);
    console.log('LOCAL MODULES REQUESTED:', this.localRequires);
    console.log('EXTENSIONS RECOGNIZED:', this.validExtensions);
    console.log('SEARCHING FOR:', this.configNameRegex);
    console.log('FOUND CONFIG AT:',  this.configPath);
    console.log('CONFIG BASE DIR:', this.configBase);
    console.log('YOUR LOCAL DEPS ARE LOCATED:', this.depMap);
    console.log('LOCAL PACKAGE.JSON:', this.localPackage);
    console.log('CLI PACKAGE.JSON', require('../package'));
  }

  if(this.configPath) {
    process.chdir(this.configBase);
    require(this.configPath);
    console.log(this);
  } else {
    console.log('No Hackfile found.');
  }
});
