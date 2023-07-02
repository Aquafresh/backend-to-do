import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskEntity[]> {
    return this.taskRepository.find();
  }

  async createTask(taskData: TaskEntity): Promise<void> {
    const task = this.taskRepository.create(taskData);
    await this.taskRepository.save(task);
  }

  async deleteAllTasks(): Promise<void> {
    await this.taskRepository.delete({});
  }

  async updateTask(id: number, taskData: TaskEntity): Promise<TaskEntity> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }

    task.text = taskData.text;
    task.status = taskData.status;

    return this.taskRepository.save(task);
  }
}
