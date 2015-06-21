#!/usr/bin/env node

//
// This hook copies various files from external vendors, mostly located in the node_modules directory
// into the www/libs directory
//

var target = "debug";
if (process.env.TARGET) {
    target = process.env.TARGET;
}

// configure all the files to copy.  Key of object is the source file, value is the destination location.
var filestocopy = [];

if (target === "debug") {
    filestocopy.push({ "../node_modules/backbone/backbone.js": "www/libs/backbone.js" });
    filestocopy.push({ "../node_modules/backbone.localstorage/backbone.localStorage.js": "www/libs/backbone.localStorage.js" });
    filestocopy.push({ "../node_modules/underscore/underscore.js": "www/libs/underscore.js" });
    filestocopy.push({ "../node_modules/jquery/dist/jquery.js": "www/libs/jquery.js" });
    // filestocopy.push({ "../node_modules/less/dist/less.js": "www/libs/less.js" });
    // filestocopy.push({ "../node_modules/datetimepicker/dist/DateTimePicker.js": "www/libs/datetimepicker.js" });
    // filestocopy.push({ "../node_modules/datetimepicker/dist/DateTimePicker.css": "www/css/datetimepicker.css" });
    filestocopy.push({ "../node_modules/sweetalert/lib/sweet-alert.js": "www/libs/sweetalert.js" });
    filestocopy.push({ "../node_modules/sweetalert/lib/sweet-alert.css": "www/css/sweetalert.css" });
    // filestocopy.push({ "../node_modules/jquery-touchswipe/jquery.touchSwipe.js": "www/libs/touchswipe.js" });
    /*filestocopy.push({ "node_modules/handlebars/dist/handlebars.js": "www/libs/handlebars.js" });
    filestocopy.push({ "node_modules/datetimepicker/dist/DateTimePicker.js": "www/libs/datetimepicker.js" });
    filestocopy.push({ "node_modules/datetimepicker/dist/DateTimePicker.css": "www/libs/datetimepicker.css" });*/
}
else {
    filestocopy.push({ "../node_modules/backbone/backbone-min.js": "www/libs/backbone.js" });
    filestocopy.push({ "../node_modules/backbone.localstorage/backbone.localStorage-min.js": "www/libs/backbone.localStorage.js" });
    filestocopy.push({ "../node_modules/underscore/underscore-min.js": "www/libs/underscore.js" });
    filestocopy.push({ "../node_modules/jquery/dist/jquery.min.js": "www/libs/jquery.js" });
    // filestocopy.push({ "../node_modules/jquery/dist/less.js": "www/libs/less.js" });
    // filestocopy.push({ "../node_modules/datetimepicker/dist/DateTimePicker.min.js": "www/libs/datetimepicker.js" });
    // filestocopy.push({ "../node_modules/datetimepicker/dist/DateTimePicker.min.css": "www/css/datetimepicker.css" });
    filestocopy.push({ "../node_modules/sweetalert/lib/sweet-alert.min.js": "www/libs/sweetalert.js" });
    filestocopy.push({ "../node_modules/sweetalert/lib/sweet-alert.css": "www/css/sweetalert.css" });
    // filestocopy.push({ "../node_modules/jquery-touchswipe/jquery.touchSwipe.min.js": "www/libs/touchswipe.js" });
    /*filestocopy.push({ "node_modules/handlebars/dist/handlebars.min.js": "www/libs/handlebars.js" });
    filestocopy.push({ "node_modules/datetimepicker/dist/DateTimePicker.min.js": "www/libs/datetimepicker.js" });
    filestocopy.push({ "node_modules/datetimepicker/dist/DateTimePicker.min.css": "www/libs/datetimepicker.css" });*/
}
filestocopy.push({ "../node_modules/requirejs/require.js": "www/libs/require.js" });
filestocopy.push({ "../node_modules/marked/lib/marked.js": "www/libs/marked.js" });
// filestocopy.push({ "../node_modules/fastclick/lib/fastclick.js": "www/libs/fastclick.js" });

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

var libsdir = path.join(rootdir, 'www/libs');
if (!fs.existsSync(libsdir)) {
    fs.mkdirSync(libsdir);
}

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        var destdir = path.dirname(destfile);
        console.log("[C] " + srcfile + " -> " + destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(fs.createWriteStream(destfile));
        }
    });
});
