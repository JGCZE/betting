import type { Request, Response } from 'express';
import BetModel from '../models/newBetModel';

const newest15Bets = async (req: Request, res: Response) => {
  try {
    const response = await BetModel
      .find({ visibility: 'public' })
      .select('createdAt rival_name stack')
      .sort({ createdAt: -1 })
      .limit(3)
      .exec();

    if (!response) {
      return res.status(404).json({ success: false, message: "No bets found" });
    }

    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.log("error in fetching product: ", error);
    res.status(500).json({ succes: false, message: "Server error " });
  }
};

export default newest15Bets;
