import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
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
    createChurcheDto.keyName = createChurcheDto.keyName
      .toLocaleUpperCase()
      .trim();

    try {
      const churche = await this.churcheModel.create(createChurcheDto);
      return churche;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll() {
    return `This action returns all churche`;
  }

  async findOne(term: string) {
    let churche: Churche | null;
    churche = null;

    if (term) {
      churche = await this.churcheModel.findOne({
        keyName: term.toUpperCase().trim(),
      });
    }

    if (!churche && isValidObjectId(term)) {
      churche = await this.churcheModel.findById(term);
    }

    if (!churche) {
      throw new NotFoundException(`Sin registros`);
    }

    return churche;
  }

  async update(id: string, updateChurcheDto: UpdateChurcheDto) {
    try {
      const churche = await this.findOne(id);
      if (churche) {
        const churcheUpdated = await this.churcheModel.findByIdAndUpdate(
          id,
          updateChurcheDto,
          {
            new: true,
          },
        );

        return churcheUpdated;
      }
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    const result = await this.churcheModel.findByIdAndUpdate(
      id,
      { status: false },
      { new: true },
    );
    return result;
  }

  private handleExceptions(error: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (error.code === 11000) {
      throw new BadRequestException(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        `El ${JSON.stringify(error.keyValue)} ya Existe`,
      );
    }
    console.log(error);
    throw new InternalServerErrorException('No se puede crear la iglesia');
  }
}
