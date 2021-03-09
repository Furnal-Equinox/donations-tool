"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const tslib_1 = require("tslib");
const api_1 = require("../utils/api");
const handler = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield api_1.getAllDonors();
        return {
            statusCode: 200,
            body: JSON.stringify(res !== null
                ? res
                : null)
        };
    }
    catch (err) {
        return {
            statusCode: 402,
            body: JSON.stringify(null)
        };
    }
});
exports.handler = handler;
