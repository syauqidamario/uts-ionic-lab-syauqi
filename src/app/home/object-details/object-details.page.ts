import { Component, OnInit } from '@angular/core';
import {ObjectMipan} from '../object.model';
import {ActivatedRoute} from '@angular/router';
import {ObjectsService} from '../objects.service';

@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.page.html',
  styleUrls: ['./object-details.page.scss'],
})
export class ObjectDetailsPage implements OnInit {
  loadProduct: ObjectMipan;
  constructor(private activeRoute: ActivatedRoute, private adminService: ObjectsService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('objectID')) { return; }
      const objectID = paramMap.get('objectID');
      this.loadProduct = this.adminService.showProducts(objectID);
    });
  }
}
