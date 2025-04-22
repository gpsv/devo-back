import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Churche extends Document {
  @Prop({
    index: true,
    required: [true, 'El keyName es obligatorio'],
    unique: true,
  })
  keyName: string;

  @Prop({
    index: true,
    required: [true, 'El nombre es obligatorio'],
  })
  name: string;

  @Prop({ default: null })
  longName: string;

  @Prop({
    default: null,
    required: [true, 'La dirección es obligatorio'],
  })
  address: string;

  @Prop({
    default: null,
    required: [true, 'El número es obligatorio'],
  })
  number: string;

  @Prop({
    default: null,
    required: [true, 'El código postal es obligatorio'],
  })
  zipCode: number;

  @Prop({
    default: null,
    required: [true, 'La colonia es obligatorio'],
  })
  colonia: string;

  @Prop({
    default: null,
    required: [true, 'La ciudad es obligatorio'],
  })
  city: string;

  @Prop({
    default: null,
    required: [true, 'El estado es obligatorio'],
  })
  state: string;

  @Prop({
    default: null,
  })
  phoneNumber: string;

  @Prop({
    index: true,
    default: 'MISSION',
    emun: ['MAIN', 'MISSION'],
    required: [true, 'El nombre es obligatorio'],
  })
  typeChurch: string;

  @Prop({ default: null })
  startDate: Date;

  @Prop({ default: false })
  status: boolean;

  @Prop({ dafault: 'avatarChurche' })
  avatar: string;

  @Prop({ dafault: 'backgroundChurche' })
  background: string;

  @Prop({
    ref: 'User',
    unique: true,
    default: null,
  })
  mainLeader_id: Types.ObjectId;

  @Prop({
    ref: 'User',
    unique: true,
  })
  believers: Types.ObjectId;
}

export const ChurcheSchema = SchemaFactory.createForClass(Churche);
