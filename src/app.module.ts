import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.28.3',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestjs',
      entities: [],
      synchronize: true, //不应在生产环境中使用
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
