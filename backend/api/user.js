import express from "express";

import { LoginCallback } from "../controller/user.js";

const router = express.Router();

router.get("/callback", LoginCallback);

export default router;
