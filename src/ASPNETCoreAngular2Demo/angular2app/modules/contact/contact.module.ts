import {ContactComponent } from './components/contact/contact.component';
import {ContactRoutes} from './contact.routes';
import {HttpModule} from '@angular/http';
import {FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ContactRoutes
    ],

    exports: [ContactComponent],

    declarations:[ContactComponent],
    
    providers: []
})

export class ContactModule { }
