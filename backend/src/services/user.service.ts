import { DeleteResult, UpdateResult } from "mongodb";
import userModel, { IUser } from "../models/user.model";
import { hashPassword } from "../utils/auth/hashPassword";

export interface IQuery {
  _id?: IUser["_id"];
  password?: IUser["password"];
  email?: IUser["email"];
  first_name?: IUser["first_name"];
  last_name?: IUser["last_name"];
  hash?: IUser["hash"];
  verified?: IUser["verified"];
  currency?: IUser["currency"];
  max_date?: IUser["max_date"];
  balance?: IUser["balance"];
  id_cryptocurrencies?: IUser["id_cryptocurrencies"];
}

// Par id, email
export const findUserById = (id) => {
  return userModel.findOne({ _id: id });
};
export const findOneUserByEmail = (email) => {
  return userModel.findOne({ email: email });
};

export const findAllUsers = () => {
  return userModel.find({});
};

export const createUser = (email, username, password) => {
  return userModel.create({
    email,
    password,
    username,
  });
};

export const registerUser = async (email, username, password) => {
  const hashedPassword = await hashPassword(password);
  return userModel.create({
    email,
    password: hashedPassword,
    username,
  });
};


export const deleteUserById = (id) => {
  return userModel.deleteOne({ _id: id });
};
export const deleteUserByEmail = (email) => {
  return userModel.deleteOne({ email: email });
};

// FAUT PAS l'UTILISER !!!!!  ça risque de supprimer toute la BD x) faut savoir s'en servir !!!!!!
async function DeleteManyUser(query: any): Promise<DeleteResult> {
  return await userModel
    .deleteMany(query)
    .then((data: DeleteResult) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}
export const updateUserVerification = (id) => {
  return userModel.findByIdAndUpdate({ _id: id }, { verified: true });
};
export const updateUserByAdmin = (id, user) => {
  return userModel.findByIdAndUpdate({_id:id},user);
};

export const updateUserUsername = (id, username) => {
  return userModel.updateOne({ _id: id }, { username: username });
};
export const updateUserEmail = (id, email) => {
  return userModel.updateOne({ _id: id }, { email: email });
};

export const updateUserPassword = (id, password) => {
  return userModel.findByIdAndUpdate(
    {
      _id: id,
    },
    { password: password }
  );
};

// async function UpdateUser(query: IQuery): Promise<UpdateResult> {
//   return await userModel
//     .updateOne(query)
//     .then((data: UpdateResult) => {
//       return data;
//     })
//     .catch((error: Error) => {
//       throw error;
//     });
// }
