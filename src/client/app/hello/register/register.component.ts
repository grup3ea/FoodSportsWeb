import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../shared/services/user.service';

@Component({
    moduleId: module.id,
    selector: 'register-cmp',
    templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
    userForm : FormGroup;
    constructor(private fb:FormBuilder, private userService:UserService, private router:Router) { }

    ngOnInit():any {
      this.userForm = this.fb.group({
        name:['', Validators.required],
        email:['', Validators.required],
        password:['', Validators.required],
        role:['', Validators.required]
      });
    }

  onRegister() {
    this.userService.register(this.userForm.value).subscribe(
      data => this.router.navigate(['hello', 'login']),
      error => console.log(error)
    );
  }
}
