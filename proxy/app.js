var express = require('express');
var app = express();

var fs = require('fs');


var expressLogFile = fs.createWriteStream('./logs/express.log', {
    flags: 'a'
});
// Configuration
app.configure(function() {
    app.use(express.logger({
        stream: expressLogFile
    }));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    // app.use(express.static(__dirname + '/public')); // we dont need static for api server
});
app.configure('development', function() {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
});
app.configure('production', function() {
    app.use(express.errorHandler());
});

// extract routes and view handler to handlers, routes file to keep logic out of main.js

function start() {
    // routes.setup(app, handlers);
    var port = process.env.PORT || 3000;
    app.listen(port);
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
}

exports.start = start;
exports.app = app;