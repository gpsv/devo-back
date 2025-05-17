import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({
    index: true,
    required: [true, 'El nombre es obligatorio'],
    min: 2,
  })
  name: string;

  @Prop({
    default: null,
    min: 2,
  })
  lastName: string;

  @Prop({
    default: null,
    min: 2,
  })
  motherLastName: string;

  @Prop({
    default: '',
    min: 2,
  })
  nickName: string;

  @Prop({
    index: true,
    required: false,
    emun: ['M', 'F'],
  })
  gender: string;

  @Prop({ default: '/avatar' })
  avatar: string;

  @Prop({ default: '/background' })
  background: string;

  @Prop({ default: null })
  birthDate: Date;

  @Prop({ default: null })
  phone: string;

  @Prop({
    index: true,
    required: [true, 'El correo es obligatorio'],
    unique: true,
  })
  email: string;

  @Prop({ default: false })
  emailVerifiedAt: boolean;

  @Prop({
    required: [true, 'La contrasena es obligatoria es obligatorio'],
  })
  password: string;

  @Prop({
    default: 'NO_MEMBER_ROLE',
    ref: 'Rol',
  })
  role: Types.ObjectId;

  @Prop({ default: false, index: true })
  isActive: boolean;

  @Prop({ default: null })
  changePassword: string;

  @Prop({ default: null })
  token: string;

  @Prop({
    default: null,
    ref: 'UserPreference',
    required: false,
  })
  userPreference: Types.ObjectId;

  @Prop({
    ref: 'Church',
    required: [true, 'la iglesia es obligatoria'],
  })
  churche: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
