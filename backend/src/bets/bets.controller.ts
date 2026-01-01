import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BetsService } from './bets.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateBetDto } from './dto/create-bet.dto';

@Controller('api/bets')
export class BetsController {
  constructor(private readonly betsService: BetsService) { }

  @Get('/newest')
  async getNewestBets() {
    return this.betsService.getNewestBets();
  }

  @Post('/createBet')
  async createBet(@Body() createBetDto: CreateBetDto) {
    return this.betsService.createBet(createBetDto);
  }

  @Get(':betUrl')
  async findOne(@Param('betUrl') betUrl: string) {
    return await this.betsService.getBetById(betUrl);
  }
}
