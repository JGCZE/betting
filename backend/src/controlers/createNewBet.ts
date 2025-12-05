import type { Request, Response } from 'express';
import BetModel from '../models/newBetModel';

const createNewBet = async (req: Request, res: Response) => {
  const validBet = req.body;

  const { challanger_name, challanger_email, rival_name, stack, deadline, visibility, betTitle } = validBet;

  if (!challanger_name || !challanger_email || !rival_name || !stack || !deadline || !visibility) {
    return res
      .status(400)
      .json({ success: false, message: 'Missing required fields' });
  }

  const betUrl =
    betTitle?.toLowerCase().replace(/\s+/g, '-') ??
    Math.random().toString(36).substring(2, 10);

  try {
    const newBet = new BetModel({ ...validBet, betUrl });

    await newBet.save();
    res.status(201).json({ success: true, data: newBet });
  } catch (error) {
    console.error("Error in Create new bet : ", error);
    res.status(500).json({ success: false, message: "Server Error " });
  }
};

export default createNewBet;
