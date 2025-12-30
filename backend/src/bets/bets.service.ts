import { Injectable } from '@nestjs/common';
import { Bets, BetDocument } from './schemas/newBetSchema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBetDto } from './dto/create-bet.dto';
import { generateSlug } from 'src/utils/slug.utils';
import { BetsRepository } from './repository/bets.repository';

@Injectable()
export class BetsService {
  constructor(
    private readonly betsRepository: BetsRepository,
    @InjectModel(Bets.name) private betModel: Model<BetDocument>
  ) { }

  async getNewestBets() {
    return this.betsRepository.findNewest(10)
  }

  async createBet(createBetDto: CreateBetDto) {
    const { betTitle } = createBetDto;

    const betUrl = generateSlug(betTitle);

    const newBet = new this.betModel({
      ...createBetDto,
      betUrl,
    });

    console.log("save to DB >>>", newBet.betTitle)
    return newBet.save()
  }
}
