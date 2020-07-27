var liveServer = require("live-server");

var params = {
    "port": 3000,
    "open": false,
    "ignorePattern": "frontend\\.*|public\\.*",
    "wait": 200,
    "logLevel": 2,
    
    // When set, serve this file (server root relative)
    // for every 404 (useful for single-page applications)
    "file": "404.html"
}
liveServer.start(params);
