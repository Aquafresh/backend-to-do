import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<TaskEntity>);
    findAll(): Promise<TaskEntity[]>;
    createTask(taskData: TaskEntity): Promise<void>;
    deleteAllTasks(): Promise<void>;
    updateTask(id: number, taskData: TaskEntity): Promise<TaskEntity>;
}
