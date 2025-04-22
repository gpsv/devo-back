import { Injectable } from '@nestjs/common';
import { CreateDevotionalJournalDto } from './dto/create-devotional-journal.dto';
import { UpdateDevotionalJournalDto } from './dto/update-devotional-journal.dto';

@Injectable()
export class DevotionalJournalService {
  create(createDevotionalJournalDto: CreateDevotionalJournalDto) {
    return 'This action adds a new devotionalJournal';
  }

  findAll() {
    return `This action returns all devotionalJournal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} devotionalJournal`;
  }

  update(id: number, updateDevotionalJournalDto: UpdateDevotionalJournalDto) {
    return `This action updates a #${id} devotionalJournal`;
  }

  remove(id: number) {
    return `This action removes a #${id} devotionalJournal`;
  }
}
