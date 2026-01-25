import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

type AuthInput = { userName: string; password: string };
type SignInData = { userId: number; userName: string };
type AuthResult = { accessToken: string; userId: number; userName: string };

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) { }

  async authenticate(input: AuthInput): Promise<AuthResult | null> {
    const user = await this.validateUser(input);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    };

    return this.signIn(user);
  };

  async validateUser(input: AuthInput): Promise<SignInData | null> {
    const user = await this.userService.findUserByName(input.userName);

    if (!!user && user.password === input.password) {
      return {
        userId: user.userId,
        userName: user.userName,
      };
    }

    return null;
  }

  async signIn(user: SignInData): Promise<AuthResult> {
    const tokenPayload = {
      sub: user.userId,
      userName: user.userName,
    }

    const accessToken = await this.jwtService.signAsync(tokenPayload);

    if (!accessToken) {
      throw new UnauthorizedException('Could not create access token');
    }

    return {
      accessToken,
      userId: user.userId,
      userName: user.userName,
    };
  }
}
