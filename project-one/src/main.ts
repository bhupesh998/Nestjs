import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './User-Module/filter';
import { StudentGuard } from './student/Guards/student.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

//  app.use(middleware) //we can apply the middleware globally from here
// app.useGlobalFilters(new HttpExceptionFilter()) // to apply exception filter globally
// pp.useGlobalGuards(new StudentGuard()) to apply a guard globally on all routes

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
