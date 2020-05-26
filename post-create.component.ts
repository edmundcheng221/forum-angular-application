import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredvalue ='';
  response = '';
  onAddPost() {
    this.response = this.enteredvalue;
  }

}

