import { Component, Input, Output , EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input()
  task!: Task;
  faTimes =  faTimes;
  @Output() onDeletetask : EventEmitter <Task> =  new EventEmitter();
  

  onDelete(task : Task)
  {
    this.onDeletetask.emit(task)
  }



}
