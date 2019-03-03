import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  validateInput(form) {
    // any pattern validation etc
    return form.invalid;
  }
}