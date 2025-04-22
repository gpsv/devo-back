import { Injectable } from '@nestjs/common';
import { CreateChurcheDto } from './dto/create-churche.dto';
import { UpdateChurcheDto } from './dto/update-churche.dto';

@Injectable()
export class ChurcheService {
  create(createChurcheDto: CreateChurcheDto) {
    return 'This action adds a new churche';
  }

  findAll() {
    return `This action returns all churche`;
  }

  findOne(id: number) {
    return `This action returns a #${id} churche`;
  }

  update(id: number, updateChurcheDto: UpdateChurcheDto) {
    return `This action updates a #${id} churche`;
  }

  remove(id: number) {
    return `This action removes a #${id} churche`;
  }
}
