import express from "express";
import {
  CreateAdmin,
  FindAllAdmins,
  FindOneAdmin,
} from "../services/admin.service";
import {
  DeleteCryptoCurrency,
  FindAllCryptoCurrencies,
  UpdateCryptoCurrency,
} from "../services/cryptocurrency.service";
import { deleteUserById, updateUserByAdmin } from "../services/user.service";
import { generateToken } from "../utils/auth/jwt";

const router = express.Router();

router.post("/admin", (req, res) => {
  FindOneAdmin(req.body)
    .then((result) => {
      if (result !== null) {
        generateToken({ id: result._id, admin: true }).then((resJwt) => {
          return res
            .status(200)
            .json({ jwt: resJwt, message: "user connected" });
        });
      } else {
        return res.status(404).json({ message: "something wrong" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/admin/user/:id", (req, res) => {
  updateUserByAdmin(req.params.id, req.body)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(500).json({ code: error });
    });
});

router.delete("/admin/user/:id", (req, res) => {
  deleteUserById(req.params.id)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(500).json({ code: error });
    });
});

router.get("/admin/cryptocurrency", (req, res) => {
  FindAllCryptoCurrencies()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(500).json({ code: error });
    });
});

// router.put("/admin/cryptocurrency/:id", (req,res)=>{
//     UpdateCryptoCurrency(req.params.id, req.body).then((data)=>{
//         return res.status(200).json(data);
//     }).catch((error)=>{
//         return res.status(500).json({code:error})
//     })
// })

router.delete("/admin/cryptocurrency/:id", (req, res) => {
  DeleteCryptoCurrency(req.params.id)
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      return res.status(500).json({ code: error });
    });
});

export default router;
