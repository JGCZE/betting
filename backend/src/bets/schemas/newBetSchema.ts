import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BetDocument = HydratedDocument<Bets>;

@Schema({ timestamps: true })
export class Bets {
  @Prop({ required: true })
  challanger_name: string;

  @Prop({ required: true })
  challanger_email: string;

  @Prop({ required: true })
  rival_name: string;

  @Prop()
  rival_email: string;

  @Prop()
  betTitle: string;

  @Prop({ required: true })
  stake: string;

  @Prop({ required: true, unique: true })
  betUrl: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  deadline: string;

  @Prop({ required: true, enum: ['public', 'private'] })
  visibility: string;
}

export const BetsSchema = SchemaFactory.createForClass(Bets);
