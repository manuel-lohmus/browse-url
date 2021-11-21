/** Open URL in a browser. @preserve Copyright (c) 2021 Manuel Lõhmus. */
"use strict";

var options = require("config-sets").init({
    browse_url: {
        launch_url: "http://localhost:1337/",
        enabled: true
    }
}).browse_url;

var child_process = require("child_process");

/**
 * Opens the URL in the default browser.
 * @param {string} url
 * @returns {child_process.ChildProcess}
 */
function browseURL(url) {

    if (options.enabled) {

        if (!url) url = options.launch_url;

        var start = (process.platform == "darwin" ? "open" : process.platform == "win32" ? "start" : "xdg-open");

        var childProcess = child_process.exec(start + " " + url, function (err) {
            if (err) { console.error("\r\n", err); }
        });

        return childProcess;
    }
    else
        return null;
}

module.exports = browseURL;