import { Module } from '@nestjs/common';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Position, PositionSchema } from './entities/position.entity';

@Module({
  controllers: [PositionController],
  providers: [PositionService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Position.name,
        schema: PositionSchema,
      },
    ]),
  ],
})
export class PositionModule {}
