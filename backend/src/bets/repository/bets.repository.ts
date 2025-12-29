import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Bets, BetDocument } from "../schemas/newBetSchema";
import { Model } from "mongoose";

@Injectable()
export class BetsRepository {
  constructor(@InjectModel(Bets.name) private betModel: Model<BetDocument>) { }

  async findNewest(limit: number) {
    return this.betModel
      .find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
  }
};
