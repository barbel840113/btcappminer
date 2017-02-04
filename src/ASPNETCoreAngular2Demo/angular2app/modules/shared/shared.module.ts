import { CanLoadGuard } from './guards/canLoadGuard';
import { CanDeactivateGuard, CanDeactivateGuardContact } from './guards/canDeactivateGuard';
import { AuthenticationGuard } from './guards/authenticationGuard';
import { FooterComponent } from './components/footer/footer.component';
import { DataService } from './../../services/dataService';
import { Configuration } from './../../app.constants';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({

    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        Ng2Bs3ModalModule
    ],

    declarations: [
        NavigationComponent,
        FooterComponent
    ],

    exports: [
        NavigationComponent,
        FooterComponent
    ],
    providers: [
        DataService,
        Configuration,
        AuthenticationGuard,
        CanDeactivateGuard,
        CanLoadGuard,
        CanDeactivateGuardContact
    ]
})

export class SharedModule { }
