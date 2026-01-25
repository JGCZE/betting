import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from './users.service';
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UsersService) { }

  @Post("/registration")
  async createUser(@Body() user: CreateUserDto) {
    await this.userService.registerUser(user)
  }
}