import { PartialType } from '@nestjs/mapped-types';
import { CreateChurcheDto } from './create-churche.dto';

export class UpdateChurcheDto extends PartialType(CreateChurcheDto) {}
