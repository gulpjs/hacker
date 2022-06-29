var cp = require('child_process');
var expect = require('expect');

describe('hacker', function () {
  this.timeout(5000);

  it('can be spawned', function (done) {
    var output = cp.execSync('node ../bin/hacker.js', { cwd: __dirname });

    expect(output.toString()).toEqual('Hackerfile loaded\n');

    done();
  });
});
