import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';


@Injectable()
export class TasksService {
    constructor(
    @InjectRepository(Task)
    private TaskRepository: Repository<Task>
){}
    async findAll(): Promise<Task[]> {
        return this.TaskRepository.find()
    }
    async create(title: string ): Promise<Task> {
        const task = this.TaskRepository.create({title, done: false})
        return this.TaskRepository.save(task)
    }
    async update(id: number, done: boolean): Promise<Task | null> {
        const task = await this.TaskRepository.findOne({where: {id }})
        if (!task) return null;
        task.done = done
        return this.TaskRepository.save(task)

    }
    async delete(id: number): Promise<void> {
        this.TaskRepository.delete(id)

    }

}

