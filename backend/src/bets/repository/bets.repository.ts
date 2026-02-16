import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Bets, BetDocument } from "../schemas/newBetSchema";
import { Model } from "mongoose";
import { ECategory } from "src/types";

const isEnum = (parseCat?: string): parseCat is ECategory => {
  return Object.keys(ECategory).includes(parseCat as ECategory)
}

@Injectable()
export class BetsRepository {
  constructor(
    @InjectModel(Bets.name) private betModel: Model<BetDocument>
  ) { }

  async findNewest(pageNumber: number, limit: number, cat?: string) {
    const page = Math.max(1, pageNumber);
    const skip = (page - 1) * limit;

    const parseCat = cat?.toUpperCase()
    
    const filter = isEnum(parseCat) ? { category: parseCat} : {};

    const data = await this.betModel
      .find(filter)
      .sort({ createdAt: -1, _id: -1 })
      .skip(skip)
      .limit(limit)
      .select('_id betTitle challengerName rivalName stake deadline betUrl category')
      .exec();

    return data
  }
};
