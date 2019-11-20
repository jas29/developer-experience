"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var http_1 = require("http");
/**
 * Comment for this function
 */
exports.setEstimate = function () {
    var req = http_1.request({
        host: 'https://api.zenhub.io',
        headers: {
            'Content-Type': 'application/json',
            'X-Authentication-Token': process.env.ZENHUB_TOKEN
        },
        path: '/p1/repositories/221524450/issues/4',
        method: 'GET',
    }, function (response) {
        console.log(response); // 200
    });
    req.end();
    return true;
};
//# sourceMappingURL=estimate.js.map