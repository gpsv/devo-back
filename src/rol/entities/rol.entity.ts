import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Rol extends Document {
  @Prop({
    unique: true,
    required: [true, 'El rol es obligatorio'],
  })
  name: string;

  @Prop({
    unique: true,
    required: [true, 'La descripción es obligatoria'],
  })
  description: string;

  @Prop({ default: false })
  status: boolean;
}

export const RolSchema = SchemaFactory.createForClass(Rol);
