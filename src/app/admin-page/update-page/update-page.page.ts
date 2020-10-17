import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import {ObjectMipan} from '../../home/object.model';
import {ObjectsService} from '../../home/objects.service';

@Component({
  selector: 'app-update',
  templateUrl: './update-page.page.html',
  styleUrls: ['./update-page.page.scss'],
})
export class UpdatePage implements OnInit {
  LoadedProduct: ObjectMipan;

  // tslint:disable-next-line:max-line-length
  customPopoverOptions: any;
  // tslint:disable-next-line:max-line-length
  constructor(private itemService: ObjectsService, private alertController: AlertController, private loadingController: LoadingController, private toastController: ToastController, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productID')) {return; }
      const productId = paramMap.get('productID');
      this.LoadedProduct = this.itemService.showProducts(productId);
    });
  }

  onSubmit() { }

  async PresentAlert()
  {
    const alert = await this.alertController.create({
      message: 'Yakin ingin mengedit?',
      buttons: [
        {
          text: 'Batalkan',
          role: 'cancel'
        },
        {
          text: 'Iya',
          handler: () => this.EditProduct()
        }
      ]
    });

    await alert.present();
  }

  async PresentLoading()
  {
    const loading = await this.loadingController.create({
      message: 'Mengedit...',
      duration: 1000
    });
    await loading.present();
    const {role, data} = await loading.onDidDismiss();
  }

  async PresentToast() {
    const toast = await this.toastController.create({
      message: 'Product Has Been Edited',
      duration: 2000,
      color: 'warning'
    });
    await toast.present();
  }

  EditProduct()
  {
    this.PresentLoading().then(() => {
      // @ts-ignore
      this.itemService.EditProduct(this.LoadedProduct);
      this.PresentToast();
      this.router.navigate(['./admin-page']);
    });
  }
}

