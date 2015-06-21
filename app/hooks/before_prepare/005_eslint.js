#!/usr/bin/env node
var exec = require('child_process').exec;
var rootdir = process.argv[2];
exec(rootdir + "/../node_modules/.bin/eslint " +
	rootdir + "/www/js/*.js " +
	rootdir + "/www/js/*/*.js " +
	rootdir + "/www/js/*/*/*.js",
	function (error, stdout, stderr) {
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
    process.exit(1);
  }
});
