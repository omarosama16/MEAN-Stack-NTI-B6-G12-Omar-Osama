import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskForm } from './components/task-form/task-form';
import { TaskList } from './components/task-list/task-list';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    TaskForm,
    TaskList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(
      task => task.id === updatedTask.id
    );

    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(
      task => task.id !== id
    );
  }

  toggleTask(id: number): void {
    const task = this.tasks.find(
      task => task.id === id
    );

    if (task) {
      task.completed = !task.completed;
    }
  }

  get completedTasks(): number {
    return this.tasks.filter(
      task => task.completed
    ).length;
  }
}