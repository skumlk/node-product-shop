"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = void 0;
function successResponse(res, data = null) {
    return res.send({ success: true, data });
}
exports.successResponse = successResponse;
