import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({
    index: true,
    required: [true, 'El nombre es obligatorio'],
    min: 2,
  })
  name: string;

  @Prop({
    required: [true, 'El apellido paterno es obligatorio'],
    min: 2,
  })
  lastName: string;

  @Prop({
    required: [true, 'El apellido materno es obligatorio'],
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
    required: true,
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
    required: true,
    emun: [
      'ADMIN_ROLE',
      'MISION_LEADER_ROLE',
      'SHEPHERD_ROLE',
      'GROUPE_LEADER_ROLE ',
      'LEADER_ROLE',
      'MEMBER_ROLE',
    ],
  })
  role: string;

  @Prop({ default: false })
  status: boolean;

  @Prop({ default: null })
  changePassword: string;

  @Prop({ default: null })
  token: string;

  @Prop({ default: null })
  userPreference: Types.ObjectId;

  @Prop({ default: null })
  church: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
