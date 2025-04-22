import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Position extends Document {
  @Prop({
    required: [true, 'El nombre es obligatorio'],
    unique: true,
  })
  name: string;

  @Prop({ default: null })
  description: string;

  @Prop({ default: false })
  status: boolean;

  @Prop({ default: '/background' })
  background: string;
}

export const PositionSchema = SchemaFactory.createForClass(Position);
