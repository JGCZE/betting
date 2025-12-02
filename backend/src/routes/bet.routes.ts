import express from 'express';

import { createNewBet } from '../controlers/newBet.controller'

const router = express.Router()

router.post("/api/newBets", createNewBet)

export default router;
