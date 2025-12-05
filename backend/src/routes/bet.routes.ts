import express from 'express';
import { createNewBet, newest15Bets } from '../controlers';
import { ERoutes } from '../types/enums';

const router = express.Router()

router.post(ERoutes.CREATE_NEW_BET, createNewBet)

router.get(ERoutes.NEWEST_15_BETS, newest15Bets)

// router.get("/api/bet/:betUrl", getBetByUrl)

export default router;
