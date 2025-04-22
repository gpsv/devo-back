import { Module } from '@nestjs/common';
import { UserPreferenceService } from './user_preference.service';
import { UserPreferenceController } from './user_preference.controller';

@Module({
  controllers: [UserPreferenceController],
  providers: [UserPreferenceService],
})
export class UserPreferenceModule {}
