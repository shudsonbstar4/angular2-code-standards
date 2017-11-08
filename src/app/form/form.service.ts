import { Injectable } from '@angular/core';

@Injectable()
export class FormService {

  constructor() { }

  validateInput(form) {
    // any pattern validation etc
    return form.invalid;
  }

}
