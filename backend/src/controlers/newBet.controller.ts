import type { Request, Response } from 'express';

export const createNewBet = async (req: Request, res: Response) => {
  const response = req.body;
  console.log('BE: >>>>>>>', response);

  const { challanger_name, challanger_email, rival_name, stack, deadLine, visibility } = response;

  if(!challanger_name || !challanger_email || !rival_name || !stack || !deadLine || !visibility) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  //const newBet = new BetModel({response});



  res.status(201).json({ message: 'Bet created', data: req.body });
};
