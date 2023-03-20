"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const create = () => {
    return (0, crypto_1.createSecretKey)(process.env.APP_JWT_PRIVATE, "utf-8");
};
exports.default = create;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2VjcmV0S2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2F1dGgvY3JlYXRlU2VjcmV0S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUNBQXlDO0FBQ3pDLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWhCLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNoQixPQUFPLElBQUEsd0JBQWUsRUFBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUE7QUFFRCxrQkFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWNyZXRLZXkgfSBmcm9tIFwiY3J5cHRvXCI7XHJcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcblxyXG5jb25zdCBjcmVhdGUgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlU2VjcmV0S2V5KHByb2Nlc3MuZW52LkFQUF9KV1RfUFJJVkFURSwgXCJ1dGYtOFwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlIl19