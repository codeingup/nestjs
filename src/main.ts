import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 过滤非法的属性
      // transform: true, //自动转换
      // forbidNonWhitelisted:true // 非法属性直接报错
    }),
  );
  await app.listen(8080);
}
bootstrap();
