import mongoose, { Schema, Document } from 'mongoose';

const {Types : {String}} = Schema

export interface IAdmin extends Document {
    password: string;
    email: string;
}


const AdminSchema = new Schema({
    password: { type: String, required: true },
    email: { type: String, required: false, unique: true },
  });

export default mongoose.model<IAdmin>('Admin', AdminSchema);