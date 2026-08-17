import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {

  @Output() taskAdded = new EventEmitter<Task>();

  title = '';
  category = 'Study';
  priority = 'Medium';

  addTask(): void {

    if (!this.title.trim()) {
      return;
    }

    const task: Task = {
      id: Date.now(),
      title: this.title.trim(),
      category: this.category,
      priority: this.priority,
      completed: false
    };

    this.taskAdded.emit(task);

    this.title = '';
    this.category = 'Study';
    this.priority = 'Medium';
  }
}