import {LoginComponent } from './components/login/login.component';
import {LoginRoutes} from './login.routes';
import {HttpModule} from '@angular/http';
import {FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        LoginRoutes
    ],

    exports: [LoginComponent],

    declarations: [LoginComponent],

    providers: []
})

export class LoginModule { }
