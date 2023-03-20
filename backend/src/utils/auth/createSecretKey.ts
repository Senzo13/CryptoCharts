import { createSecretKey } from "crypto";
require("dotenv").config();

const create = () => {
    return createSecretKey(process.env.APP_JWT_PRIVATE, "utf-8");
}

export default create