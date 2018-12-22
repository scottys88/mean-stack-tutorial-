import { Component, OnInit } from '@angular/core';
import { User } from './signup.interface';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  user: User = {
    name: 'Scott',
    account: {
      email: '',
      confirm: ''
    }
  };

  onSubmit({ value, valid}: { value: User, valid: boolean}) {
    console.log(value, valid);
  }

  constructor() { }

  ngOnInit() {
  }

}
