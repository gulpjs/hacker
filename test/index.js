var cp = require('child_process');
var expect = require('expect');

describe('hacker', function () {
  it('can be spawned', function (done) {
    var output = cp.execSync('../bin/hacker.js', { cwd: __dirname });

    expect(output.toString()).toEqual('Hackerfile loaded\n');

    done();
  });
});
