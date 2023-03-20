import { DeleteResult, UpdateResult} from 'mongodb';
import adminModel,{ IAdmin } from '../models/admin.model';

export interface IQuery {
    _id?: IAdmin["_id"];
    password?: IAdmin["password"];
    email?: IAdmin["email"];
}

// Par id, email
export async function FindOneAdmin(query:IQuery): Promise<IAdmin> {
  return await adminModel.findOne(query)
    .then((data: IAdmin) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export async function FindAllAdmins(query:IQuery){
  return await adminModel.find({first_name:{$gte:query}})
    .then((data) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}


export async function CreateAdmin({ password,email}: IQuery): Promise<IAdmin> {

  return await adminModel.create({
    password,
    email
  })
    .then((data: IAdmin) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export async function DeleteAdmin(query: IQuery): Promise<DeleteResult> {
  return await adminModel.deleteOne(query)
    .then((data: DeleteResult) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

// FAUT PAS l'UTILISER !!!!!  ça risque de supprimer toute la BD x) faut savoir s'en servir !!!!!!
export async function DeleteManyAdmin(query: any): Promise<DeleteResult> {
  return await adminModel.deleteMany(query)
    .then((data: DeleteResult) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export async function UpdateAdmin(query:IQuery): Promise<UpdateResult> {
  return await adminModel.updateOne(query)
    .then((data: UpdateResult) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}
