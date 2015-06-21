#!/usr/bin/env node

// This hook installs all your plugins

// Add your plugins to this list--either the identifier, the filesystem location or the URL
var pluginlist = require("../../../package.json").cordovaPlugins;

// No need to configure below

var fs = require('fs');
var path = require('path');
var sys = require('sys');
var exec = require('child_process').exec;

var refresh = false;
process.argv.forEach(function(val, index, array) {
    if (val == 'refresh')
        refresh = true;
});

function sh(command, callback) {

    function done(error, stdout, stderr) {

        if (stdout) console.log(stdout);
        if (stderr) console.log('ERROR: ' + stderr);
        if (callback)
            callback();
    }

    if (typeof command === 'string') {
        console.log("$ " + command);
        exec(command, done);
    }
    else if (command.length) {
        sh(command.shift(), function(error, stdout, stderr) {
            sh(command, callback);
        });
    }
    else {
        if (callback) callback();
    }
}

var commands = [];

pluginlist.forEach(function(plug) {
    var id, url;
    if (typeof plug === 'string') {
        id = url = plug;
        args = "";
    }
    else {
        id = plug.id;
        url = plug.url || plug.id;
        args = plug.args || "";
    }
    //if (refresh)
        //commands.push("../node_modules/.bin/cordova plugins rm \"" + id + "\"");
    commands.push("../node_modules/.bin/cordova plugin add \"" + url + "\" " + args);
});

commands.push("patch -f -p2 < ../CalendarPluginFix.patch");
commands.push("rm -f platforms/android/libs/android-support-v4.jar");
sh(commands);
