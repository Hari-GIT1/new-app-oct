import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class TODOComponent {
  tasks: any = [];
  selectedTask: any = null;
  newTask: any = {
    id: 0,
    description: '',
    time: ''

}
 addTask() {
  if (!this.newTask.description || !this.newTask.time) {
    alert('Please fill in both fields.');
    return;
  }
  this.newTask.id = Date.now();
  this.tasks.push({ ...this.newTask });
  this.resetFields();
}

resetFields() {
  this.newTask = { id: 0, description: '', time: '' };
}

viewTask(task: any) {
  this.selectedTask = task;
}

editTask(task: any) {
  this.newTask = { ...task };
  this.tasks = this.tasks.filter((t: { id: any; }) => t.id !== task.id);
}
}
