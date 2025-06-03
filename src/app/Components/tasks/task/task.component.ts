import { Component, input, output } from '@angular/core';
import { ITask } from './task.model';
import { CardComponent } from "../../../shared/components/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
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
