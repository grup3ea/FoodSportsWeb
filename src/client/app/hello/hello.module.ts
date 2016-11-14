import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HelloComponent} from './hello.component';
import {RegisterModule} from './register/register.module';
import {LoginModule} from './login/login.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LoginModule,
        RegisterModule,
        ReactiveFormsModule
    ],
    declarations: [
        HelloComponent
    ],
    exports: [
        HelloComponent
    ]
})

export class HelloModule {
}
