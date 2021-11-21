# browse-url: Open URLs in a browser.

[![npm-version](https://badgen.net/npm/v/browse-url)](https://www.npmjs.com/package/browse-url)
[![npm-week-downloads](https://badgen.net/npm/dw/browse-url)](https://www.npmjs.com/package/browse-url)

Open URLs in a browser. Easy to use and test your project.

## Installing

`npm install --save-dev browse-url`

## Usage example

```js"use strict";
var http = require("http");
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
}).listen(port);

var url = "http://localhost:" + port + "/";

/* longer version */
var browseURL = require("./index.min.js");
var childProcess = browseURL(url);
if (childProcess) {
    childProcess.on("exit", function (code) {
        setTimeout(function () { process.exit(); }, 5000);
    });
}

/* short version */
//require("browse-url");
//require("browse-url")(url);
```

## Config-sets file

config-sets.json [*Read more...*](https://github.com/manuel-lohmus/config-sets)
```json
{
  "production": {
    "isDebug": false,
    "browse_url": {
      "launch_url": "http://example.com/",
      "enabled": false
    }
  },
  "development": {
    "isDebug": true,
    "browse_url": {
      "launch_url": "http://localhost:1337/",
      "enabled": true
    }
  }
}
```

## License

[MIT](LICENSE)

Copyright (c) 2021 Manuel L&otilde;hmus <manuel@hauss.ee>


