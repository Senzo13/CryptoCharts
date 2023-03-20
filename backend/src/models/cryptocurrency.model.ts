import mongoose, { Schema, Document } from 'mongoose';

const {Types : {String, Number, Boolean}} = Schema

export interface IValues extends Document {
    timestamp:string;
    o:string;
    h:number;
    l:number;
    c:number;
    q:number;
}
export interface ICryptoCurrency extends Document {
    symbol: string;
    values:Array<IValues>;
    activated: boolean;
}

const Cryptocurrency = new Schema({
    symbol:{type: String, required: false, unique: true},
    values:
    [{ 
        timestamp:{type: String,  required: false},
        o:{type: Number, required: false},
        h:{type: Number, required: false},
        l:{type: Number, required: false},
        c:{type: Number, required: false},
        q:{type: Number, required: false},
    }],
    activated:{type: Boolean, required: false},
});

export default mongoose.model<ICryptoCurrency>('cryptocurrency', Cryptocurrency);