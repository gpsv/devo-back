import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Departament extends Document {
  @Prop({ required: [true, 'El nombre es obligatorio'] })
  name: string;

  @Prop({ default: null })
  description: string;

  @Prop({
    ref: 'User',
    unique: true,
    default: null,
  })
  mainLeader_id: Types.ObjectId;

  @Prop({ default: [] })
  secondaryLeaders: [
    {
      user_id: {
        type: Types.ObjectId;
      };
      position: {
        type: string;
      };
    },
  ];

  @Prop({
    ref: 'Church',
    default: null,
  })
  church_id: Types.ObjectId;

  @Prop({ default: false })
  status: boolean;

  @Prop({ default: 'avatarDepartament' })
  background: string;
}

export const DepartamentSchema = SchemaFactory.createForClass(Departament);
