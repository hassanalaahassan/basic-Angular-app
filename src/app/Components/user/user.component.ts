import { Component, computed, input, Input, output, signal } from '@angular/core';
import { DUMMY_USERS } from '../../Data/dummy-data';


const randomUser = Math.floor(Math.random() * DUMMY_USERS.length )

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  //   user = signal(DUMMY_USERS[randomUser])

  //   imagePath = computed(()=> 'assets/Images/users/' + this.user().avatar)

  // @Input() user!:{name:string,avatar:string,id:string}

  user = input.required<{name:string,avatar:string,id:string}>()  //this return signal
  selected = input.required<boolean>()  //this return signal
  select = output<string>()

  get imagePath(){
    return 'assets/Images/users/' + this.user().avatar
  }

   onSelectUser(){
    this.select.emit(this.user().id)
   }


}
