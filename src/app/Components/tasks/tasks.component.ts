import { Component, input, signal, WritableSignal } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../../Data/dummy-data';
import { NewTaskComponent } from "./new-task/new-task.component";
import { INewtask, ITask } from './task/task.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  user = input.required<{name:string,avatar:string,id:string}>()
  tasks: WritableSignal<ITask[]> = signal(DUMMY_TASKS)
  isAddingTasks: WritableSignal<boolean> = signal(false)

  get userTasks(){
    return this.tasks().filter((task)=> task.userId === this.user().id)
  }
  onTaskComplete(taskId:string):void{
    this.tasks.set( this.tasks().filter((task)=> task.id !== taskId))
  }

  onAddingTask():void{
    this.isAddingTasks.set(!this.isAddingTasks())
  }
  onTaskAdded(task:INewtask):void{
    const newTaskId = `t${this.tasks.length+1}`;

    const newTask:ITask = {...task,id:newTaskId,userId:this.user().id}

    this.tasks().unshift(newTask)
    this.onAddingTask()
  }





}
