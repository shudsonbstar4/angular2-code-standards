import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  displayErrors: Boolean = false;
  @Input() form: FormGroup;
  @Output() submitted: any = new EventEmitter();

  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
    this.form.controls.username.valueChanges.subscribe(
      val => {
        this.displayErrors = this.formService.validateInput(this.form);
      }
    )
  }

  submit() {
    this.displayErrors = this.formService.validateInput(this.form);
    if (this.displayErrors) { return };
    console.log(this.form.controls.username.value);
    this.submitted.emit(this.form.controls.username.value);
  }

}
