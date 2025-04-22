import { PartialType } from '@nestjs/mapped-types';
import { CreateDevotionalJournalDto } from './create-devotional-journal.dto';

export class UpdateDevotionalJournalDto extends PartialType(CreateDevotionalJournalDto) {}
