import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ZipCode extends Document {
  @Prop({
    index: true,
    required: [true, 'El CP es obligatorio'],
  })
  zipCode: number;

  @Prop({
    required: [true, 'El asentamiento es obligatorio'],
  })
  asentamiento: string;

  @Prop({
    required: [true, 'El typeAsentamiento es obligatorio'],
  })
  typeAsentamiento: string;

  @Prop({
    required: [true, 'El Municipality es obligatorio'],
  })
  Municipality: string;

  @Prop({
    required: [true, 'El state es obligatorio'],
  })
  state: string;

  @Prop({ default: null })
  zona: string;
}

export const ZipCodeSchema = SchemaFactory.createForClass(ZipCode);
