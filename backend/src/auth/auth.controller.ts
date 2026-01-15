import { Body, Controller, Get, HttpCode, HttpStatus, NotImplementedException, Post, Request, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(
    @Body() input: { username: string; password: string },
    @Res({ passthrough: true }) response: Response,
  ) {
    const result = await this.authService.authenticate(input);

    response.cookie('accessToken', result?.accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    return {
      userId: result?.userId,
      username: result?.username
    }
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    return request.user;
  }
}
