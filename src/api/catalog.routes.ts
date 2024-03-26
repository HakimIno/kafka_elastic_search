import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

//endpoint
router.post("/product", async (req: Request, res: Response, next: NextFunction) => {
    return res.status(201).json({ msg: "Xx" })
});

export default router;