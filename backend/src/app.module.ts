import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BetsModule } from './bets/bets.module';
import { ConfigModule } from '@nestjs/config';
import { SeedService } from './seed/seed.service';
// Musíš naimportovat Schéma a Class, aby je AppModule znal
import { Bets, BetsSchema } from './bets/schemas/newBetSchema'; 

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI ?? ""),
    MongooseModule.forFeature([{ name: Bets.name, schema: BetsSchema }]),    
    BetsModule
  ],
  controllers: [AppController],
  providers: [AppService, SeedService], 
})
export class AppModule { }
