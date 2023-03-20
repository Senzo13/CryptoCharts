import { ideahub } from 'googleapis/build/src/apis/ideahub';
import { DeleteResult, UpdateResult} from 'mongodb';
import cryptocurrencyModel, {ICryptoCurrency} from '../models/cryptocurrency.model';

export interface IQuery {
  symbol?: ICryptoCurrency["symbol"];
  values?:ICryptoCurrency["values"];
}

export async function FindOneCryptoCurrency(query:IQuery): Promise<ICryptoCurrency> {
  return await cryptocurrencyModel.findOne(query)
    .then((data: ICryptoCurrency) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export async function FindAllCryptoCurrencies(){
  return await cryptocurrencyModel.find()
    .then((data) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export function CreateCryptoCurrency(symbol, boolean) {
  return cryptocurrencyModel.create({
    symbol: symbol,
    values: [],
    activated: boolean,
  })
}

export async function DeleteCryptoCurrency(id): Promise<DeleteResult> {
  return await cryptocurrencyModel.deleteOne({_id:id})
    .then((data: DeleteResult) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

// FAUT PAS l'UTILISER !!!!!  ça risque de supprimer toute la BD x) faut savoir s'en servir !!!!!!
async function DeleteManyCryptoCurrency(query: any): Promise<DeleteResult> {
  return await cryptocurrencyModel.deleteMany(query)
    .then((data: DeleteResult) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export async function UpdateCryptoCurrency(query:IQuery): Promise<UpdateResult> {
  return await cryptocurrencyModel.updateOne(query)
    .then((data: UpdateResult) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export function UpdateCryptoCurrencyDataset(symbol, data) {
  return cryptocurrencyModel.updateOne(symbol, {$push: {values: [data]}})
    .then((data: UpdateResult) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}