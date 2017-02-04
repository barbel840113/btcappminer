import {CanDeactivate} from '../../../wwwroot/js/@angular/router';
import { CanLoadGuard } from './../shared/guards/canLoadGuard';
import {LoginComponent} from './components/login/login.component';
import { CanDeactivateGuard } from './../shared/guards/canDeactivateGuard';
import { AuthenticationGuard } from './../shared/guards/authenticationGuard';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'contact',
        component: LoginComponent,
        canActivate: [AuthenticationGuard],
        canDeactivate: [CanDeactivateGuard],
        canLoad: [CanLoadGuard]
    }
];

//routes for child module = Contact
export const LoginRoutes = RouterModule.forChild(routes);
