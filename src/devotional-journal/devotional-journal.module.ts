import { Module } from '@nestjs/common';
import { DevotionalJournalService } from './devotional-journal.service';
import { DevotionalJournalController } from './devotional-journal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DevotionalJournal,
  DevotionalJournalSchema,
} from './entities/devotional-journal.entity';

@Module({
  controllers: [DevotionalJournalController],
  providers: [DevotionalJournalService],
  imports: [
    MongooseModule.forFeature([
      {
        name: DevotionalJournal.name,
        schema: DevotionalJournalSchema,
      },
    ]),
  ],
})
export class DevotionalJournalModule {}
