import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class DevotionalJournal extends Document {
  @Prop({ default: false })
  darkMode: boolean;

  @Prop({ type: Object })
  weekDate: {
    numberWeek: number;
    firstDayDate: number;
    lastDayDate: number;
    firstNameDay: string;
    lastNameDay: string;
    startOfDate: Date;
    endOfDate: Date;
  };

  @Prop({ type: Array })
  daily: [
    {
      book: string;
      chapter: number;
      versicle: number;
      description: string;
      ownerDay: Date;
      createdAt: Date;
    },
  ];

  @Prop({ type: Array })
  prayer: [
    {
      ownerDay: Date;
      timeMinutes: number;
      createdAt: Date;
    },
  ];

  @Prop({ type: Array })
  meetingWithGroup: [
    {
      ownerDay: Date;
      status: boolean;
      createdAt: Date;
    },
  ];

  @Prop({ type: Array })
  fasting: [
    {
      ownerDay: Date;
      status: boolean;
      createdAt: Date;
    },
  ];

  @Prop({ default: false })
  tithe: boolean;

  @Prop({
    index: true,
    ref: 'Churche',
    required: true,
  })
  church: Types.ObjectId;

  @Prop({
    index: true,
    ref: 'User',
    required: true,
  })
  usuario: Types.ObjectId;
}

export const DevotionalJournalSchema =
  SchemaFactory.createForClass(DevotionalJournal);
