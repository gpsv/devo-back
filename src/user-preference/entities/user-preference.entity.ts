import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UserPreference extends Document {
  @Prop({ default: false })
  darkMode: boolean;
}

export const UserPreferenceSchema =
  SchemaFactory.createForClass(UserPreference);
