import mongoose, { Schema, Document, Types } from "mongoose";
import { ICryptoCurrency } from "./cryptocurrency.model";

const {
  Types: { String, Number, Boolean },
} = Schema;

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  hash: string;
  verified: boolean;
  currency: string;
  max_date: string;
  balance: number;
  id_cryptocurrencies: Types.Array<ICryptoCurrency["_id"]>;
  provider?: "google" | "facebook";
}

const UserSchema = new Schema({
  username: { type: String, required: false },
  password: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  first_name: { type: String, required: false },
  last_name: { type: String, required: false },
  hash: { type: String, required: false },
  verified: { type: Boolean, required: false, default: false },
  max_date: { type: String, required: false },
  currency: { type: String, required: false },
  balance: { type: Number, required: false },
  id_cryptocurrencies: { type: [Schema.Types.ObjectId], required: false },
  provider: { type: String, required: false },
});
UserSchema.set("timestamps", true);

export default mongoose.model<IUser>("User", UserSchema);
