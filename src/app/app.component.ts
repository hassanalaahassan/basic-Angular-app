import { Component, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from "./Components/header/header.component";
import { UserComponent } from "./Components/user/user.component";
import { DUMMY_USERS } from './Data/dummy-data';
import { TasksComponent } from "./Components/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Json-Placeholder';
  users = DUMMY_USERS
  currentUserId:WritableSignal<string> = signal(this.users[0].id)


  get user():{name:string,avatar:string,id:string} {
    return this.users.find((user)=> user.id === this.currentUserId())!;
  }

  isSelected(userId:string):boolean{
    return this.currentUserId() === userId
  }




  onSelectUser(id:string):void{
     this.currentUserId.set(id)
  }

}
