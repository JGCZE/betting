import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BetDocument = HydratedDocument<Bets>;

export enum ECategory {
  ALCOHOL = "Alkohol",
  MONEY = "Peníze",
  CHALLENGE = "Úkol/ výzva",
  FOOD = "Jídlo",
  SERVCIE = "Služba",
  HUMILIATION = "Veřejné ponížení",
  GIFT = "Dárek",
  ITEMS = "Zboží",
  OTHERS = "Ostatní",
  HONOR = "Čest",
  IWILLDO = "Udělám místo tebe..."
}

@Schema({ timestamps: true })
export class Bets {
  @Prop({ required: true })
  challengerName: string;

  @Prop({ required: true })
  challengerEmail: string;

  @Prop({ required: true })
  rivalName: string;

  @Prop()
  rivalEmail: string;

  @Prop()
  betTitle: string;

  @Prop({ required: true })
  stake: string;

  @Prop({ required: true, unique: true })
  betUrl: string;

  @Prop()
  category: ECategory;

  @Prop()
  description: string;

  @Prop({ required: true })
  deadline: string;

  @Prop({ required: true, enum: ['public', 'private'] })
  visibility: string;
}

export const BetsSchema = SchemaFactory.createForClass(Bets);
