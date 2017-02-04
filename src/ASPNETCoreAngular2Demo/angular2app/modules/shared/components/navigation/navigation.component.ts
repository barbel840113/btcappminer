import { Component, ViewChild } from '@angular/core';
import {Modal} from 'ng2-modal';
import {ModalModule} from "ng2-bootstrap";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    moduleId: module.id,
    selector: 'starterTemplateNavigation',
    //directives: [Modal], 
    styles:[' >>> .modal-xl { width: 500px; } #password{width:200px;}'],
    templateUrl: './navigation.component.html'
})

export class NavigationComponent {

    @ViewChild('validationModal')
    public modalComponent : ModalComponent;

    //username and password
    private username : string;
    private password : string;
    private isLogged : boolean;

    constructor()
    {
      this.isLogged = true;
    }

    onLogging() {
        
        this.modalComponent.open();
        this.isLogged = false;   
    }

    onLoggout(){
        this.isLogged = true;
    }

    //implement open function(params:type) 
    open()    {
        this.modalComponent.open();
    }

    ///implement close function
    close()
    {
        this.modalComponent.close();
    }
    
    //output
    output(){
        console.log("output" + "username = " + this.username + "passowrd = " + this.password);
        this.modalComponent.close();
    }
}
