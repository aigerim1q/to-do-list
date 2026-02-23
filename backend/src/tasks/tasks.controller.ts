import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(
        private TaskServise: TasksService
    ){}
    @Get()
    async findAll(): Promise<Task[]> {
        return await this.TaskServise.findAll()
    }
    @Post() 
    async create(@Body('title') title: string): Promise<Task> {
        return await this.TaskServise.create(title)
    }
    @Patch(':id')
    async update(@Param('id' ) id: number, @Body('done' ) done: boolean): Promise<Task | null> {
        return await this.TaskServise.update(id, done)
    }
    @Delete(':id')
    async delete(@Param('id', ) id: number): Promise<void> {
        return await this.TaskServise.delete(id)
    }
}
