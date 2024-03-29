#!/usr/bin/env node
var Liftoff = require('liftoff');
var minimist = require('minimist');

var argv = minimist(process.argv.slice(2));

var Hacker = new Liftoff({
  name: 'hacker',
  //  moduleName: 'hacker',     // these are assigned
  //  configName: 'hackerfile', // automatically by
  //  processTitle: 'hacker',   // the "name" option
  extensions: require('interpret').jsVariants,
  // ^ automatically attempt to require module for any javascript variant
  // supported by interpret.  e.g. coffee-script / livescript, etc
  v8flags: ['--harmony'], // to support all flags: require('v8flags')
  // ^ respawn node with any flag listed here
})
  .on('loader:success', function (name, module) {
    console.log('Loaded:', name);
  })
  .on('loader:failure', function (name, err) {
    console.log('Unable to load:', name);
    if (argv.verbose) {
      console.error(err);
    }
  })
  .on('respawn', function (flags, child) {
    console.log('Detected node flags:', flags);
    console.log('Respawned to PID:', child.pid);
  });

Hacker.prepare(
  {
    cwd: argv.cwd,
    configPath: argv.hackerfile,
    preload: argv.preload,
    completion: argv.completion,
  },
  function (env) {
    Hacker.execute(env, invoke);
  }
);

function invoke(env, argv) {
  argv = minimist(argv);

  if (argv.verbose) {
    console.log('LIFTOFF SETTINGS:', this);
    console.log('CLI OPTIONS:', argv);
    console.log('CWD:', env.cwd);
    console.log('LOCAL MODULES PRELOADED:', env.require);
    console.log('SEARCHING FOR:', env.configNameRegex);
    console.log('FOUND CONFIG AT:', env.configPath);
    console.log('CONFIG BASE DIR:', env.configBase);
    console.log('YOUR LOCAL MODULE IS LOCATED:', env.modulePath);
    console.log('LOCAL PACKAGE.JSON:', env.modulePackage);
    console.log('CLI PACKAGE.JSON', require('../package'));
  }

  if (process.cwd() !== env.cwd) {
    process.chdir(env.cwd);
    console.log('Working directory changed to', env.cwd);
  }

  if (!env.modulePath) {
    console.log(
      'Local ' + Hacker.moduleName + ' module not found in: ' + env.cwd
    );
    process.exit(1);
  }

  if (env.configPath) {
    require(env.configPath);
  } else {
    console.log('No ' + Hacker.configName + ' found.');
  }
}
