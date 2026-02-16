import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

  async getNewestBets(page: string, limit: string, cat?: string) {
    const pageNumber = parseInt(page, 10) || 1;
    const limitNumber = parseInt(limit, 10) || 32;

    return this.betsRepository.findNewest(pageNumber, limitNumber, cat);
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

  async getBetById(betUrl: string) {
    if (!betUrl) {
      throw new BadRequestException('Bet URL is required');
    }

    const betPageData = await this.betModel.findOne({ betUrl }).exec();

    if (!betPageData) {
      throw new NotFoundException('Data for BetPage not found');
    }

    return betPageData
  }
}
