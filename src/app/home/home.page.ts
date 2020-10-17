import {Component, OnInit} from '@angular/core';
import { ObjectMipan } from './object.model';
import { ObjectsService } from './objects.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  List = true;
  Products: ObjectMipan[];

  constructor(private objectService: ObjectsService) {}

  // tslint:disable-next-line:use-lifecycle-interface
    iconStatus: any;
  ngOnInit(){
    this.Products = this.objectService.showAllProducts();
  }

  ionViewWillEnter(){
    this.Products = this.objectService.showAllProducts();
  }

  triggerButton(){
    this.List = !this.List;
  }
  
}
