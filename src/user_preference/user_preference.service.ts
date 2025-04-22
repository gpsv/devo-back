import { Injectable } from '@nestjs/common';
import { CreateUserPreferenceDto } from './dto/create-user_preference.dto';
import { UpdateUserPreferenceDto } from './dto/update-user_preference.dto';

@Injectable()
export class UserPreferenceService {
  create(createUserPreferenceDto: CreateUserPreferenceDto) {
    return 'This action adds a new userPreference';
  }

  findAll() {
    return `This action returns all userPreference`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPreference`;
  }

  update(id: number, updateUserPreferenceDto: UpdateUserPreferenceDto) {
    return `This action updates a #${id} userPreference`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPreference`;
  }
}
