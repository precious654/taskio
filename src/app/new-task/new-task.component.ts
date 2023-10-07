import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {

  selected = (event: any) => {
    event.target.style.backgroundColor = '#4b914c';
    event.target.style.color = '#1c1f20';
  }
}
