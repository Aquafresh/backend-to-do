import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task/task.entity';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'ea_test',
        synchronize: true,
        entities: [TaskEntity],
      }),
    }),
    TypeOrmModule.forFeature([TaskEntity]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
