import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevotionalJournalService } from './devotional-journal.service';
import { CreateDevotionalJournalDto } from './dto/create-devotional-journal.dto';
import { UpdateDevotionalJournalDto } from './dto/update-devotional-journal.dto';

@Controller('devotional-journal')
export class DevotionalJournalController {
  constructor(private readonly devotionalJournalService: DevotionalJournalService) {}

  @Post()
  create(@Body() createDevotionalJournalDto: CreateDevotionalJournalDto) {
    return this.devotionalJournalService.create(createDevotionalJournalDto);
  }

  @Get()
  findAll() {
    return this.devotionalJournalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devotionalJournalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDevotionalJournalDto: UpdateDevotionalJournalDto) {
    return this.devotionalJournalService.update(+id, updateDevotionalJournalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devotionalJournalService.remove(+id);
  }
}
