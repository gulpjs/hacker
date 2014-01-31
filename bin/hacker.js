#!/usr/bin/env node
'use strict';

var Liftoff = require('liftoff');

var Hacker = new Liftoff({
  moduleName: 'hacker',
  configName: 'hackfile',
  cwdOpt: 'cwd',
  requireOpt: 'require'
}).on('require', function (name, module) {
  if (name === 'coffee-script') {
    module.register();
  }
}).on('requireFail', function (name, err) {
  console.log('Unable to load:', name, err);
}).on('run', function () {

  // console.log('CLI OPTIONS:', this.args);
  // console.log('CWD:', this.cwd);
  // console.log('LOCAL MODULES REQUIRED:', this.localRequires);
  // console.log('EXTENSIONS RECOGNIZED:', this.validExtensions);
  // console.log('SEARCHING FOR:', this.configNameRegex);
  // console.log('FOUND CONFIG AT:',  this.configPath);
  // console.log('CONFIG BASE DIR:', this.configBase);
  // console.log('YOUR LOCAL MODULE IS LOCATED AT:', this.modulePath);

  if(this.configPath) {
    process.chdir(this.configBase);
    require(this.configPath);
  } else {
    console.log('No Hackfile found.');
  }
});

Hacker.launch();
