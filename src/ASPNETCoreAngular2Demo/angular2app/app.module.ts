import { HomeModule } from './modules/home/home.module';
import { AboutModule } from './modules/about/about.module';
import { ContactModule} from './modules/contact/contact.module';
import { SharedModule } from './modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';
import { HttpModule } from '@angular/http';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { LoadingBarModule } from "ng2-loading-bar";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';


@NgModule({
    imports: [
        BrowserModule,
        AppRouting,
        HttpModule,
        ToasterModule,
        LoadingBarModule,
        ContactModule,
        SharedModule,
        AboutModule,
        HomeModule,
        Ng2Bs3ModalModule        
    ],

    declarations: [
        AppComponent,
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
