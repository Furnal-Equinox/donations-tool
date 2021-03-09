"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const tslib_1 = require("tslib");
const api_1 = require("../utils/api");
const handler = (event, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const body = (event === null || event === void 0 ? void 0 : event.body) !== undefined ? JSON.parse(event.body) : null;
    try {
        if (body === null) {
            throw new Error('Body arguments empty!');
        }
        if ((body === null || body === void 0 ? void 0 : body.type) === null) {
            throw new Error('Search type empty!');
        }
        if ((body === null || body === void 0 ? void 0 : body.term) === null) {
            throw new Error('Search term empty!');
        }
        let res = null;
        switch (body.type) {
            case 'FurName':
                res = yield api_1.getDonorByFurName(body.term);
                break;
            case 'EmailAddress':
                res = yield api_1.getDonorByEmailAddress(body.term);
                break;
            case 'DiscordHandle':
                res = yield api_1.getDonorByDiscordHandle(body.term);
                break;
            default:
                throw new Error('Unknown search type!');
        }
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
