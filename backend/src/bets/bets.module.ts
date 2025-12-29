import { Module } from '@nestjs/common';
import { BetsService } from './bets.service';
import { BetsController } from './bets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bet, BetSchema } from './schemas/newBetSchema';
import { BetsRepository } from './repository/bets.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bet.name, schema: BetSchema }])],
  controllers: [BetsController],
  providers: [
    BetsService,
    BetsRepository
  ],
})
export class BetsModule { }
