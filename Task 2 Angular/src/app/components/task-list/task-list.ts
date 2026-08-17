import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

  @Input() tasks: Task[] = [];
  @Output() taskDeleted = new EventEmitter<number>();
  @Output() taskToggled = new EventEmitter<number>();
  @Output() taskUpdated = new EventEmitter<Task>();

  searchText = '';

  editingTask: Task | null = null;


  get filteredTasks(): Task[] {

    return this.tasks.filter(task =>
      task.title
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );

  }


  deleteTask(id: number): void {
    this.taskDeleted.emit(id);
  }


  toggleTask(id: number): void {
    this.taskToggled.emit(id);
  }


  editTask(task: Task): void {

    this.editingTask = {
      ...task
    };

  }


  saveTask(): void {

    if (!this.editingTask) {
      return;
    }

    if (!this.editingTask.title.trim()) {
      return;
    }

    this.taskUpdated.emit({
      ...this.editingTask,
      title: this.editingTask.title.trim()
    });

    this.editingTask = null;
  }


  cancelEdit(): void {
    this.editingTask = null;
  }

}