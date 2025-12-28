import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BetDocument = HydratedDocument<Bet>;

@Schema({ timestamps: true })
export class Bet {
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

  @Prop({ required: true, unique: true })
  betUrl: string;

  @Prop({ required: true })
  stack: string;

  @Prop({ required: true })
  deadline: string;

  @Prop({ required: true, enum: ['public', 'private'] })
  visibility: string;
}

export const BetSchema = SchemaFactory.createForClass(Bet);