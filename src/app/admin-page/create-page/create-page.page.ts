import { Component, OnInit } from '@angular/core';
import {ObjectMipan} from '../../home/object.model';
import {ObjectsService} from '../../home/objects.service';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.page.html',
  styleUrls: ['./create-page.page.scss'],
})
export class CreatePagePage implements OnInit{
  DATA: ObjectMipan = {
    objectID: undefined,
    type: undefined,
    imageURL: undefined,
    brand: undefined,
    model: undefined,
    price: undefined,
    stock: undefined,
    baseClock: undefined,
    boostClock: undefined,
    processorCore: undefined,
    processorThread: undefined,
    RAMSpeed: undefined,
    RAMSize: undefined,
    chipset: undefined,
    supported: undefined,
  };

  // tslint:disable-next-line:max-line-length
  customPopoverOptions: any;
  // tslint:disable-next-line:max-line-length
  productType: string;
  // tslint:disable-next-line:max-line-length
  constructor(private itemService: ObjectsService, private alertController: AlertController, private loadingController: LoadingController, private toastController: ToastController, private router: Router) { }

  ngOnInit() { }

  async PresentLoading()
  {
    const loading = await this.loadingController.create({
      message: 'Adding product...',
      duration: 1000
    });

    await loading.present();
    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  async PresentToast()
  {
    const toast = await this.toastController.create({
      message: 'Product Has been Added',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }

  onSubmit(form: NgForm)
  {
    this.PresentLoading().then(() =>
    {
      this.DATA.objectID = '0';
      this.DATA.imageURL = form.value.imgUrl;
      this.DATA.brand = form.value.merk;
      this.DATA.model = form.value.modelBarang;
      this.DATA.price = form.value.hargaBarang;
      this.DATA.stock = form.value.stokBarang;
      this.DATA.type = form.value.productType;

      // tslint:disable-next-line:triple-equals
      if (form.value.productType == 'CPU')
      {
        this.DATA.baseClock = form.value.bacl;
        this.DATA.boostClock = form.value.boCl;
        this.DATA.processorCore = form.value.core;
        this.DATA.processorThread = form.value.thread;
        this.DATA.RAMSpeed = 0;
        this.DATA.RAMSize = 0;
        this.DATA.chipset = '';
        this.DATA.supported = '';
      }
      // tslint:disable-next-line:triple-equals
      else if (form.value.productType == 'RAM')
      {
        this.DATA.baseClock = 0;
        this.DATA.boostClock = 0;
        this.DATA.processorCore = 0;
        this.DATA.processorThread = 0;
        this.DATA.RAMSpeed = form.value.spd;
        this.DATA.RAMSize = form.value.sz;
        this.DATA.chipset = '';
        this.DATA.supported = '';
      }
      // tslint:disable-next-line:triple-equals
      else if (form.value.productType == 'Motherboard')
      {
        this.DATA.baseClock = 0;
        this.DATA.boostClock = 0;
        this.DATA.processorCore = 0;
        this.DATA.processorThread = 0;
        this.DATA.RAMSpeed = 0;
        this.DATA.RAMSize = 0;
        this.DATA.chipset = form.value.cs;
        this.DATA.supported = form.value.support;
      }
      // tslint:disable-next-line:triple-equals
      else if (form.value.productType == 'GPU')
      {
        this.DATA.baseClock = 0;
        this.DATA.boostClock = 0;
        this.DATA.processorCore = 0;
        this.DATA.processorThread = 0;
        this.DATA.RAMSpeed = 0;
        this.DATA.RAMSize = 0;
        this.DATA.chipset = '';
        this.DATA.supported = '';
      }

      this.itemService.addNewProducts(this.DATA);
      this.PresentToast();

      this.router.navigate(['./admin']);
    });

  }

}
