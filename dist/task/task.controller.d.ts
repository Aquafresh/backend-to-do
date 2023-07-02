import { TaskService } from './task.service';
import { TaskEntity } from './task.entity';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getAllTasks(): Promise<TaskEntity[]>;
    createTask(task: TaskEntity): void;
    deleteAllTasks(): Promise<void>;
    updateTask(id: string, task: TaskEntity): Promise<TaskEntity>;
}
