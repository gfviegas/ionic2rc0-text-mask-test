import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import MaskedInput from 'angular2-text-mask';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    testForm: FormGroup;

    phone: AbstractControl;

    constructor(public navCtrl: NavController, public fb: FormBuilder) {
      this.testForm = fb.group({
        phone: ['', Validators.required]
      });

      this.phone = this.testForm.controls['phone'];
    }

    phoneMask(userInput) {
      let numbers = userInput.match(/\d/g);
      let numberLength = 0;
      if (numbers) {
        numberLength = numbers.join("").length;
      }

      if (numberLength > 10) {
        return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      } else {
        return ['(', /[1-9]/, /[1-9]/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
      }
    }
}
