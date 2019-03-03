
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  data: any;
  errorsExist: Boolean = false;
  userForm: FormGroup = new FormGroup({ username: new FormControl('')});

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.userForm.controls.username.valueChanges.subscribe(
      val => {
        this.validateInput(val);
      }
    )
  }

  validateInput(val) {
    this.errorsExist = false;
    console.log('val', val);
    if (!val || val > 100 || val === 'undefined') {
      this.errorsExist = true;
    }
  }

  fetch() {
    let user = this.userForm.controls.username.value;
    this.validateInput(user);

    if (this.errorsExist) {
      return;
    }

    this.http.get(`https://api.github.com/users/${user}`)
      .subscribe(
        response => {
          this.data = response;
          console.log('data', this.data);
          this.showSuccess();
        },
        error => {
          this.showError();
        }
      );
  }

  showSuccess() {
    this.toastr.success('Data refreshed!', 'Success!');
  }

  showError() {
    this.toastr.error('Could not fetch data!', 'Oops!');
  }
}