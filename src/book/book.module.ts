import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book, BookSchema } from './entities/book.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
})
export class BookModule {}
