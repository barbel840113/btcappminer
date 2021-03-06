import { DataService } from './../../../../services/dataService';
import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { LoadingBarService } from "ng2-loading-bar";
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(private _dataService: DataService,
        private _toasterService: ToasterService,
        private _slimLoadingBarService: LoadingBarService)
        {
        

            this.message = 'Hello from HomeComponent constructor';
        }

  
    ngOnInit() {
        this._slimLoadingBarService.start();

        this._dataService
            .GetAll()
            .subscribe((data: any) => this.values = data,
            (error: any) => console.log(error),
            () => {
                this._toasterService.pop('success', 'Complete', 'Getting all values complete');
                this._slimLoadingBarService.complete();
            });
    }

    

   
   
}
