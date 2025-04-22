import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChurcheService } from './churche.service';
import { CreateChurcheDto } from './dto/create-churche.dto';
import { UpdateChurcheDto } from './dto/update-churche.dto';

@Controller('churche')
export class ChurcheController {
  constructor(private readonly churcheService: ChurcheService) {}

  @Post()
  create(@Body() createChurcheDto: CreateChurcheDto) {
    return this.churcheService.create(createChurcheDto);
  }

  @Get()
  findAll() {
    return this.churcheService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.churcheService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChurcheDto: UpdateChurcheDto) {
    return this.churcheService.update(+id, updateChurcheDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.churcheService.remove(+id);
  }
}
