import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usenseTest';
  password: string = '';
  easyPass: string = 'gray';
  mediumPass: string= 'gray';
  hardPass: string= 'gray';

  checkPasswordStrength() {
    console.log(this.password)
    const length = this.password ? this.password.length : 0;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?~]/.test(this.password);

    if (length === 0) {
      this.easyPass = 'gray';
      this.mediumPass = 'gray';
      this.hardPass = 'gray';
    } else if (length < 8) {
      this.easyPass = 'red';
      this.mediumPass = 'red';
      this.hardPass = 'red';
    } else if (length >= 8) {
      if ((hasLetters) || (hasSymbols) || (hasNumbers)) {
        this.easyPass = 'red';
        this.mediumPass = 'gray';
        this.hardPass = 'gray';
        if ((hasLetters && hasSymbols) || (hasLetters && hasNumbers) || (hasNumbers && hasSymbols)) {
          this.easyPass = 'yellow';
          this.mediumPass = 'yellow';
          this.hardPass = 'gray';
          if (hasLetters && hasNumbers && hasSymbols) {
            this.easyPass = 'green';
            this.mediumPass = 'green';
            this.hardPass = 'green';
          }
        }
      }
    }
  }
}
