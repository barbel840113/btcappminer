import { AboutComponent } from './../../about/components/about/about.component';
import { ContactComponent } from './../../contact/components/contact/contact.component';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<AboutComponent> {
  canDeactivate(component: AboutComponent) {
    // Component represents your component here
    return component.MyCanDeactivate ? component.MyCanDeactivate() : true;
  }

}


@Injectable()
export class CanDeactivateGuardContact implements CanDeactivate<ContactComponent> {
  canDeactivate(component: ContactComponent) {
    // Component represents your component here
    return component.MyCanDeactivate ? component.MyCanDeactivate() : true;
  }

}