import { Module } from '@nestjs/common';
import { BetsService } from './bets.service';
import { BetsController } from './bets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Bets, BetsSchema } from './schemas/newBetSchema';
import { BetsRepository } from './repository/bets.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Bets.name, schema: BetsSchema }])],
  controllers: [BetsController],
  providers: [
    BetsService,
    BetsRepository
  ],
})

export class BetsModule { }
