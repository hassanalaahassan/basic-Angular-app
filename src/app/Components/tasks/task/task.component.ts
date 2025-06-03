import { Component, input, output } from '@angular/core';
import { ITask } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

  task = input.required<ITask>()
  taskCompleted = output<string>()

  onTaskComplete():void{
    this.taskCompleted.emit(this.task().id)
  }



}
