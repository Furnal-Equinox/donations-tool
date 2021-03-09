"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const tslib_1 = require("tslib");
const api_1 = require("../utils/api");
const handler = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        const totals = yield api_1.getTotals();
        return {
            statusCode: 200,
            body: JSON.stringify(totals !== null
                ? totals.amountDonated
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
