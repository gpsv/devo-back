import { Module } from '@nestjs/common';
import { UserPreferenceService } from './user-preference.service';
import { UserPreferenceController } from './user-preference.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  UserPreference,
  UserPreferenceSchema,
} from './entities/user-preference.entity';

@Module({
  controllers: [UserPreferenceController],
  providers: [UserPreferenceService],
  imports: [
    MongooseModule.forFeature([
      {
        name: UserPreference.name,
        schema: UserPreferenceSchema,
      },
    ]),
  ],
})
export class UserPreferenceModule {}
