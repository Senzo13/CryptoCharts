import express from "express"
const router = express.Router();

router.get("/ping", (req, res) => {
    return res.status(200).json({
      message: "pong",
    });
  });

  router.get("/ping_proetected", (req, res) => {
    return res.status(200).json({
      message: "pong",
    });
  });

  export default router;
  