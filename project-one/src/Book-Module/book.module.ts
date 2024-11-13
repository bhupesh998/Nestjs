import { Module } from '@nestjs/common';
import { BookController } from './book.controller';


@Module({
  imports: [],
  controllers: [BookController],
  providers: [], // AppService is Local to this Module
  exports: [] // with exports now the AppService can be used by other modules
})
export class BookModule {}
