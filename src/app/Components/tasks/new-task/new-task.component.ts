import { Component, EventEmitter, Output, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INewtask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() addedTask = new EventEmitter<INewtask>();
  enteredTitle:WritableSignal<string> =signal('');
  enteredSummary:WritableSignal<string> =signal('');
  enteredDate:WritableSignal<string> =signal('');

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if(!this.enteredTitle() || !this.enteredSummary() || !this.enteredDate()) {
      return;
    }
    this.addedTask.emit({
      title: this.enteredTitle(),
      description: this.enteredSummary(),
      date: this.enteredDate(),
    });
  }
}
