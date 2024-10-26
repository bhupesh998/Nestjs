import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './User-Module/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

//  app.use(middleware) //we can apply the middleware globally from here
// app.useGlobalFilters(new HttpExceptionFilter()) // to apply exception filter globally

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
