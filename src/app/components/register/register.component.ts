import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {
    this.authService.register(this.user).subscribe(
      (res) => {
        alert('Registration Successful!');
        this.router.navigate(['/']);
      },
      (err) => alert('Registration Failed')
    );
  }
}
