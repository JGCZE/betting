import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'

export type UserMocked = {
  userId: number;
  userName: string;
  password: string;
}

const users: Array<UserMocked> = [
  {
    userId: 1,
    userName: 'Alice',
    password: 'topsecret',
  },
  {
    userId: 2,
    userName: 'Bob',
    password: '123abc',
  },
];

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) { }

  async findUserByName(userName: string): Promise<UserMocked | undefined> {
    return users.find((user) => user.userName === userName);
  }


  async registerUser(user: CreateUserDto) {
    try {
      console.log("registerUser >>>", user)

      const { userName, email } = user

      const isExistingUser = await this.userModel.findOne(
        { $or: [{ userName: userName }, { email: email }] }
      )

      if (isExistingUser) {
        throw new BadRequestException('User with this email or username already exists');
      }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(user.password, salt)

      const newUser = new this.userModel({
        ...user,
        password: hashedPassword
      })

      return await newUser.save()
    } catch (error) {
      console.error("Kritická chyba při registraci:", error);

      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new Error('Registration failed: ' + error.message);
    }
  }
}
