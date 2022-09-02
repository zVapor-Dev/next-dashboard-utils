import { Router } from "express";
import authRouter from "./auth";

const router = Router();

router.get("/", (req, res) => {
    res.send(`Please specify what part of the api you want to access.`)
})
router.use("/auth", authRouter);

export default router;
