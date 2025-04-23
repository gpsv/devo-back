import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChurcheDto } from './dto/create-churche.dto';
import { UpdateChurcheDto } from './dto/update-churche.dto';
import { Churche } from './entities/churche.entity';

@Injectable()
export class ChurcheService {
  constructor(
    @InjectModel(Churche.name)
    private readonly churcheModel: Model<Churche>,
  ) {}

  async create(createChurcheDto: CreateChurcheDto) {
    createChurcheDto.keyName = createChurcheDto.keyName.toLocaleUpperCase();
    try {
      const churche = await this.churcheModel.create(createChurcheDto);
      return churche;
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (error.code === 11000) {
        console.log(error);
        throw new BadRequestException(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          `El ${JSON.stringify(error.keyValue)} ya Existe`,
        );
      }
      throw new InternalServerErrorException('No se puede crear la iglesia');
    }
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

  async remove(id: string) {
    const result = await this.churcheModel.findByIdAndUpdate(
      id,
      { status: false },
      { new: true },
    );
    return result;
  }
}
