import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Book extends Document {
  @Prop({
    index: true,
    required: [true, 'La abbreviation es obligatorio'],
    unique: true,
  })
  abbreviation: string;

  @Prop({ default: null })
  canon: string;

  @Prop({ default: null, required: true })
  chapters: string;

  @Prop({
    default: null,
    required: [true, 'El name es obligatorio'],
    unique: true,
  })
  name: string;

  @Prop({
    default: null,
    required: [true, 'El name_long es obligatorio'],
    unique: true,
  })
  name_long: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
