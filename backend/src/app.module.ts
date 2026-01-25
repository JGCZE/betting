import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BetsModule } from './bets/bets.module';
import { ConfigModule } from '@nestjs/config';
import { SeedService } from './seed/seed.service';
import { Bets, BetsSchema } from './bets/schemas/newBetSchema';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User, UserSchema } from './users/schema/user.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI ?? ""),
    MongooseModule.forFeature([
      { name: Bets.name, schema: BetsSchema },
      { name: User.name, schema: UserSchema }
    ]),
    BetsModule, UsersModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, SeedService],
})
export class AppModule { }
