import { Component, OnInit } from "@angular/core";
import { ServiceProviderService } from "../service/service-provider/service-provider.service";


@Component({
    selector: 'pos-component',
    template: `POS COMPONENT`
})
export class PosComponent implements  OnInit   {

    constructor(
        public serviceProvider : ServiceProviderService,
    ){
    }

    ngOnInit(): void {
    }

}