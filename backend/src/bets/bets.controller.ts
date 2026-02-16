import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { BetsService } from './bets.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { BetResponseDto, CreateBetDto, GetBetsHomePageDto } from './dto/create-bet.dto';
import { ECategory } from 'src/types';

@Controller('api/bets')
export class BetsController {
  constructor(private readonly betsService: BetsService) { }

  @Get('/newest')
  @ApiResponse({
    status: 200,
    description: 'Returns newest bets',
    type: [GetBetsHomePageDto]
  })
  @ApiQuery({ name: 'cat', required: false, enum: ECategory })
  async getNewestBets(
    @Query('page') page: string, 
    @Query('limit') limit: string,
    @Query('cat') cat?: string
  ) {
    return this.betsService.getNewestBets(page, limit, cat);
  }

  @Post('/createBet')
  async createBet(@Body() createBetDto: CreateBetDto) {
    return this.betsService.createBet(createBetDto);
  }

  @Get(':betUrl')
  @ApiResponse({
    status: 200,
    description: 'Get bet by betUrl',
    type: BetResponseDto
  })
  async findOne(@Param('betUrl') betUrl: string) {
    return await this.betsService.getBetById(betUrl);
  }
}
