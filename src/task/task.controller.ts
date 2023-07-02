import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAllTasks(): Promise<TaskEntity[]> {
    return this.taskService.findAll();
  }

  @Post()
  createTask(@Body() task: TaskEntity): void {
    this.taskService.createTask(task);
  }

  @Delete()
  async deleteAllTasks(): Promise<void> {
    await this.taskService.deleteAllTasks();
  }

  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() task: TaskEntity,
  ): Promise<TaskEntity> {
    const taskId = parseInt(id);
    return this.taskService.updateTask(taskId, task);
  }
}
