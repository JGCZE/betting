import type { Request, Response } from 'express';

export const createNewBet = async (req: Request, res: Response) => {
  const response = req.body;
  console.log('BE: >>>>>>>', response);

  res.status(201).json({ message: 'Bet created', data: req.body });
};