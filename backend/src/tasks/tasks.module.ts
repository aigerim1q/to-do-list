import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [TypeOrmModule.forFeature([Task])]
})
export class TasksModule {}
