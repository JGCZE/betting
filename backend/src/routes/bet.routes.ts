import express from 'express';

import { createNewBet, getBetByUrl } from '../controlers/newBet.controller'

const router = express.Router()

router.post("/api/newBets", createNewBet)

router.get("/api/bet/:betUrl", getBetByUrl)

export default router;
