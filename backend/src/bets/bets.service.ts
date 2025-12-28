import { Injectable } from '@nestjs/common';
import { Bet, BetDocument } from './schemas/newBetSchema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BetsService {
  constructor(@InjectModel(Bet.name) private betModel: Model<BetDocument>) { }

  async getAllBets() {
    return this.betModel.find().exec();
  }

  async getNewestBets() {
    return this.betModel
      .find()
      .sort({ createdAt: -1 })
      .limit(5)
      .exec();
  }
}
