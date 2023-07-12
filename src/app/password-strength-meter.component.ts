import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrls: ['./password-strength-meter.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordStrengthMeterComponent),
      multi: true
    }
  ]
})
export class PasswordStrengthMeterComponent implements ControlValueAccessor {
  @Input() password: string = '';
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.password = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  getStrengthClass(index: number): string {
    const strength = this.getPasswordStrength();
    if (strength === 'weak') {
      return index === 1 ? 'weak' : 'invalid';
    } else if (strength === 'medium') {
      return index <= 2 ? 'medium' : 'invalid';
    } else if (strength === 'strong'){
      return 'strong';
    } else {
      return 'invalid'
    }
  }

  getPasswordStrength(): string {
    if (!this.password || this.password.length < 8) {
      return 'invalid';
    }

    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);

    if (hasLetters && hasSymbols && hasNumbers) {
      return 'strong';
    } else if ((hasLetters && hasSymbols) || (hasLetters && hasNumbers) || (hasNumbers && hasSymbols)) {
      return 'medium';
    } else {
      return 'weak';
    }
  }
}
