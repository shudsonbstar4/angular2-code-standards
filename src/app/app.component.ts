import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  data: any;
  userForm: FormGroup = new FormGroup({ username: new FormControl('', Validators.required)});

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  fetch(user) {
    this.data = this.userService.getRepos(user);
  }
}