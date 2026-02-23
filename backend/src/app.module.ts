import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'postgres',
    database: 'todo_db',
    autoLoadEntities: true,
    synchronize: true
  }
  ),TasksModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
