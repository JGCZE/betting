import { Body, Controller, Get, Post } from '@nestjs/common';
import { BetsService } from './bets.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/bets')
export class BetsController {
  constructor(private readonly betsService: BetsService) { }

  @Get('/allBets')
  async getAllBets() {
    return this.betsService.getAllBets();
  }

  @Get('/newest')
  async getNewestBets() {
    return this.betsService.getNewestBets();
  }

  @Post('/')
  async createBet(@Body() createBetDto: any) {
    return this.betsService
  }
}
