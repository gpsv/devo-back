import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { DepartamentModule } from './departament/departament.module';
import { PositionModule } from './position/position.module';
import { RolModule } from './rol/rol.module';
import { UserPreferenceModule } from './user_preference/user_preference.module';
import { ZipCodeModule } from './zip_code/zip_code.module';
import { ChurcheModule } from './churche/churche.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/devotionalNest'),
    UserModule,
    BookModule,
    DepartamentModule,
    PositionModule,
    RolModule,
    UserPreferenceModule,
    ZipCodeModule,
    ChurcheModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
