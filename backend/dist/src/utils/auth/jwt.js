"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.gen = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jose_1 = require("jose");
const createSecretKey_1 = __importDefault(require("./createSecretKey"));
dotenv_1.default.config();
const secret = (0, createSecretKey_1.default)();
const gen = async (user_id) => {
    return await new jose_1.SignJWT({ user_id })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setIssuer(process.env.APP_ISSUER)
        .setAudience("http://localhost:3000")
        .setExpirationTime("1h")
        .sign(secret);
};
exports.gen = gen;
const verify = async (token) => {
    return (0, jose_1.jwtVerify)(token, secret, {
        issuer: process.env.APP_ISSUER,
        audience: "http://localhost:3000",
    });
};
exports.verify = verify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxzL2F1dGgvand0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QiwrQkFBMkQ7QUFDM0Qsd0VBQXVDO0FBQ3ZDLGdCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBQSx5QkFBTSxHQUFFLENBQUM7QUFDakIsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBZ0MsRUFBRTtJQUNqRSxPQUFPLE1BQU0sSUFBSSxjQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQztTQUNsQyxrQkFBa0IsQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsQ0FBQztTQUNwQyxXQUFXLEVBQUU7U0FDYixTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7U0FDakMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLGlCQUFpQixDQUFDLElBQUksQ0FBQztTQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBUlcsUUFBQSxHQUFHLE9BUWQ7QUFFSyxNQUFNLE1BQU0sR0FBRyxLQUFLLEVBQ3pCLEtBQTBCLEVBQ0EsRUFBRTtJQUM1QixPQUFPLElBQUEsZ0JBQVMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO1FBQzlCLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVU7UUFDOUIsUUFBUSxFQUFFLHVCQUF1QjtLQUNsQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFQVyxRQUFBLE1BQU0sVUFPakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcclxuaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5LCBKV1RWZXJpZnlSZXN1bHQgfSBmcm9tIFwiam9zZVwiO1xyXG5pbXBvcnQgY3JlYXRlIGZyb20gXCIuL2NyZWF0ZVNlY3JldEtleVwiO1xyXG5kb3RlbnYuY29uZmlnKCk7XHJcbmNvbnN0IHNlY3JldCA9IGNyZWF0ZSgpO1xyXG5leHBvcnQgY29uc3QgZ2VuID0gYXN5bmMgKHVzZXJfaWQpOiBQcm9taXNlPHN0cmluZyB8IFVpbnQ4QXJyYXk+ID0+IHtcclxuICByZXR1cm4gYXdhaXQgbmV3IFNpZ25KV1QoeyB1c2VyX2lkIH0pXHJcbiAgICAuc2V0UHJvdGVjdGVkSGVhZGVyKHsgYWxnOiBcIkhTMjU2XCIgfSlcclxuICAgIC5zZXRJc3N1ZWRBdCgpXHJcbiAgICAuc2V0SXNzdWVyKHByb2Nlc3MuZW52LkFQUF9JU1NVRVIpXHJcbiAgICAuc2V0QXVkaWVuY2UoXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIilcclxuICAgIC5zZXRFeHBpcmF0aW9uVGltZShcIjFoXCIpXHJcbiAgICAuc2lnbihzZWNyZXQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHZlcmlmeSA9IGFzeW5jIChcclxuICB0b2tlbjogc3RyaW5nIHwgVWludDhBcnJheVxyXG4pOiBQcm9taXNlPEpXVFZlcmlmeVJlc3VsdD4gPT4ge1xyXG4gIHJldHVybiBqd3RWZXJpZnkodG9rZW4sIHNlY3JldCwge1xyXG4gICAgaXNzdWVyOiBwcm9jZXNzLmVudi5BUFBfSVNTVUVSLFxyXG4gICAgYXVkaWVuY2U6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCIsXHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==