import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Bets, BetDocument } from "../schemas/newBetSchema";
import { Model } from "mongoose";

@Injectable()
export class BetsRepository {
  constructor(@InjectModel(Bets.name) private betModel: Model<BetDocument>) { }

  async findNewest(pageNumber: number, limit: number) {
    const page = Math.max(1, pageNumber);
    const skip = (page - 1) * limit;

    return this.betModel
      .find()
      .sort({ createdAt: -1 , _id: -1})
      .skip(skip)
      .limit(limit)
      .select('_id betTitle challengerName rivalName stake deadline betUrl')
      .exec();
  }
};
