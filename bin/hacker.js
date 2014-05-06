#!/usr/bin/env node
'use strict';

var Liftoff = require('liftoff');

var Hacker = new Liftoff({
  name: 'hacker',
//  localDeps: ['hacker'],     // these are assigned
//  configName: 'hackerfile',  // automatically by
//  processTitle: 'hacker',    // the "name" option
  extensions: require('interpret').extensions,
  cwdOpt: 'cwd',
  requireOpt: 'require'
}).on('require', function (name, module) {
  console.log('Loading:',name);
}).on('requireFail', function (name, err) {
  console.log('Unable to load:', name, err);
});

var launcher = function (env) {
  if(env.argv.verbose) {
    console.log('LIFTOFF SETTINGS:', this);
    console.log('CLI OPTIONS:', env.argv);
    console.log('CWD:', env.cwd);
    console.log('LOCAL MODULES PRELOADED:', env.preload);
    console.log('SEARCHING FOR:', env.configNameRegex);
    console.log('FOUND CONFIG AT:',  env.configPath);
    console.log('CONFIG BASE DIR:', env.configBase);
    console.log('YOUR LOCAL MODULE IS LOCATED:', env.modulePath);
    console.log('LOCAL PACKAGE.JSON:', env.modulePackage);
    console.log('CLI PACKAGE.JSON', require('../package'));
  }

  if(env.configPath) {
    process.chdir(env.configBase);
    require(env.configPath);
  } else {
    console.log('No Hackerfile found.');
  }
}

Hacker.launch(launcher);
