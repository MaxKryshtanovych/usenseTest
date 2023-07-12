import { Component, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordFormComponent),
      multi: true
    }
  ]
})
export class PasswordFormComponent implements ControlValueAccessor {
  passwordForm: FormGroup;
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor(private formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group({
      password: ''
    });

    this.passwordForm.valueChanges.subscribe(value => {
      this.onChange(value.password);
    });
  }

  writeValue(value: any): void {
    this.passwordForm.patchValue({ password: value }, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
