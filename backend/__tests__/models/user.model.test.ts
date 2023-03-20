import { ObjectId } from "mongodb";
import userModel from "../../src/models/user.model";

describe('testing user model', () => {
    it('When creating a new userModel, it should send the expected object', () => {
        const object = new userModel({  password:"lyan123",
            username: "mooom",
            email: "email@email.com",
            first_name: "mohamed",
            last_name: "lahcen",
            hash: "123aze",
            verified: true,
            max_date: "02/20/2030",
            currency: "euro",
        })
        expect(object).toBeInstanceOf(userModel)
    });
});