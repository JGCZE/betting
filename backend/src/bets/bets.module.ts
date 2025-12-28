import { Module } from '@nestjs/common';
import { BetsService } from './bets.service';
import { BetsController } from './bets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bet, BetSchema } from './schemas/newBetSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bet.name, schema: BetSchema }])],
  controllers: [BetsController],
  providers: [BetsService],
})
export class BetsModule { }
