import { Component, OnInit } from '@angular/core';
import {ObjectMipan} from '../home/object.model';
import {ObjectsService} from '../home/objects.service';
import {AlertController, LoadingController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
})
export class AdminPagePage implements OnInit {
  Products: ObjectMipan[];
  // tslint:disable-next-line:max-line-length
  constructor(private itemService: ObjectsService, private alertController: AlertController, private loadingController: LoadingController, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.Products = this.itemService.showAllProducts();
  }

  ionViewWillEnter() {
    this.Products = this.itemService.showAllProducts();
  }

  async PresentAlert(objectID)
  {
    const alert = await this.alertController.create({
      message: 'Yakin mau hapus?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: () => this.DeleteProduct(objectID)
        }
      ]
    });

    await alert.present();
  }

  async PresentLoading()
  {
    const loading = await this.loadingController.create({
      message: 'Deleting...',
      duration: 1000
    });

    await loading.present();
    const {role, data} = await loading.onDidDismiss();
    console.log('Loading dismissed');
  }

  async PresentToast()
  {
    const toast = await this.toastController.create({
      message: 'Produk Dihapus',
      duration: 2000,
      color: 'danger'
    });
    await toast.present();
  }

  DeleteProduct(objectID)
  {
    this.PresentLoading().then(() => {
      this.itemService.deleteProducts(objectID);
      this.ionViewWillEnter();
      this.PresentToast();
    });
  }

  EditProduct(objectID)
  {
    this.router.navigate(['./admin-page', objectID]);
  }

}
