"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDonorByFurName = exports.getDonorByEmailAddress = exports.getDonorByDiscordHandle = exports.getTotals = exports.getAllDonors = void 0;
const tslib_1 = require("tslib");
const faunadb = tslib_1.__importStar(require("faunadb"));
const getAllDonors = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const q = faunadb.query;
    const faunaClient = new faunadb.Client({
        secret: process.env.REACT_APP_FAUNA_SERVER_KEY
    });
    try {
        const doesRecordExist = yield faunaClient.query(q.Exists(q.Match(q.Index('allDonors'))));
        if (doesRecordExist) {
            const document = yield faunaClient.query(q.Map(q.Paginate(q.Documents(q.Collection('Donor')), { size: 3000 }), q.Lambda(x => q.Get(x))));
            return document.data.map(x => x.data).filter(x => x.hasDonated);
        }
        else {
            return null;
        }
    }
    catch (err) {
        return null;
    }
});
exports.getAllDonors = getAllDonors;
const getTotals = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const q = faunadb.query;
    const faunaClient = new faunadb.Client({
        secret: process.env.REACT_APP_FAUNA_SERVER_KEY
    });
    try {
        const doesRecordExist = yield faunaClient.query(q.Exists(q.Match(q.Index('getTotals'))));
        if (doesRecordExist) {
            const document = yield faunaClient.query(q.Get(q.Match(q.Index('getTotals'))));
            return document.data;
        }
        else {
            return null;
        }
    }
    catch (err) {
        return null;
    }
});
exports.getTotals = getTotals;
const getDonorByDiscordHandle = (handle) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const q = faunadb.query;
    const faunaClient = new faunadb.Client({
        secret: process.env.REACT_APP_FAUNA_SERVER_KEY
    });
    try {
        const doesRecordExist = yield faunaClient.query(q.Exists(q.Match(q.Index('getDonorByDiscordHandle'), handle)));
        if (doesRecordExist) {
            const document = yield faunaClient.query(q.Get(q.Match(q.Index('getDonorByDiscordHandle'), handle)));
            return document.data;
        }
        else {
            return null;
        }
    }
    catch (err) {
        return null;
    }
});
exports.getDonorByDiscordHandle = getDonorByDiscordHandle;
const getDonorByEmailAddress = (email) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const q = faunadb.query;
    const faunaClient = new faunadb.Client({
        secret: process.env.REACT_APP_FAUNA_SERVER_KEY
    });
    try {
        const doesRecordExist = yield faunaClient.query(q.Exists(q.Match(q.Index('getDonorByEmailAddress'), email)));
        if (doesRecordExist) {
            const document = yield faunaClient.query(q.Get(q.Match(q.Index('getDonorByEmailAddress'), email)));
            return document.data;
        }
        else {
            return null;
        }
    }
    catch (err) {
        return null;
    }
});
exports.getDonorByEmailAddress = getDonorByEmailAddress;
const getDonorByFurName = (name) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const q = faunadb.query;
    const faunaClient = new faunadb.Client({
        secret: process.env.REACT_APP_FAUNA_SERVER_KEY
    });
    try {
        const doesRecordExist = yield faunaClient.query(q.Exists(q.Match(q.Index('getDonorByFurName'), name)));
        if (doesRecordExist) {
            const document = yield faunaClient.query(q.Get(q.Match(q.Index('getDonorByFurName'), name)));
            return document.data;
        }
        else {
            return null;
        }
    }
    catch (err) {
        return null;
    }
});
exports.getDonorByFurName = getDonorByFurName;
