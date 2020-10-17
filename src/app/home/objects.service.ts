import { Injectable } from '@angular/core';
import { ObjectMipan } from './object.model';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService {
  CheckForStock = [];
  private product: ObjectMipan[] = [
    {
      objectID: 'O1',
      type : 'CPU',
      imageURL : 'https://images-na.ssl-images-amazon.com/images/I/51XGGvDJRML._SL1200_.jpg',
      brand : 'Intel',
      model : 'Core i9 X-series',
      price : 141000000,
      stock : 100,
      baseClock : 3.3,
      boostClock: 4.3,
      processorCore : 10,
      processorThread : 20,
      RAMSpeed: null,
      RAMSize: null,
      chipset: null,
      supported: null
    },
    {
      objectID : 'O2',
      type: 'RAM',
      imageURL: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/31/4505638/4505638_a414bfab-aa5e-4bf0-926c-2eee350c00b1_700_824.png',
      brand: 'V-GeN',
      model: 'DDR4 SODimm',
      price: 438000,
      stock: 200,
      baseClock : 3.6,
      boostClock: 5.3,
      processorCore : 11,
      processorThread : 30,
      RAMSpeed: null,
      RAMSize: null,
      chipset: null,
      supported: null
    },
    {
      objectID : 'O3',
      type: 'Motherboard',
      imageURL: 'https://www.asus.com/media/global/products/kKqRzVJHGa1IDdqZ/P_setting_000_1_90_end_500.png',
      brand: 'ROG Maximus',
      model: 'XI Extreme',
      price: 2950000,
      stock: 300,
      baseClock: null,
      boostClock: null,
      processorCore: null,
      processorThread: null,
      RAMSpeed: null,
      RAMSize: null,
      chipset: 'AMD TRX50',
      supported: 'AMD Ryzen Threadripper'
    },
    {
      objectID: '04',
      type: 'GPU',
      imageURL: 'https://www.asus.com/media/global/products/2r16ce2wrdh7nouf/P_setting_000_1_90_end_500.png',
      brand: 'Asus',
      model: 'Phoenix Radeon',
      price: 2500000,
      stock: 350,
      baseClock: null,
      boostClock: null,
      processorCore: null,
      processorThread: null,
      RAMSpeed: null,
      RAMSize: null,
      chipset: null,
      supported: null
    },
    {
      objectID: '04',
      type: 'GPU',
      imageURL: 'https://www.asus.com/media/global/products/2r16ce2wrdh7nouf/P_setting_000_1_90_end_500.png',
      brand: 'Asus',
      model: 'Phoenix Radeon',
      price: 2500000,
      stock: 350,
      baseClock: null,
      boostClock: null,
      processorCore: null,
      processorThread: null,
      RAMSpeed: null,
      RAMSize: null,
      chipset: null,
      supported: null
    },
    {
      objectID: '05',
      type: 'Motherboard',
      imageURL: 'https://www.asus.com/media/global/products/08gi3ii5h7adqqax/P_setting_000_1_90_end_500.png',
      brand: 'ROG',
      model: 'Crosshair VIII Dark Hero',
      price: 15000000,
      stock: 300,
      baseClock: null,
      boostClock: null,
      processorCore: null,
      processorThread: null,
      RAMSpeed: null,
      RAMSize: null,
      chipset: null,
      supported: 'AMD Ryzen Gen.3'
    }
  ];

  constructor() { }

  showAllProducts(){
    this.CheckForStock = [];
    let x = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let y = 0; y < this.product.length; y++){
      if (this.product[y].stock > 0){
        this.CheckForStock[x] = this.product[y];
        x++;
      }
    }
    return [...this.CheckForStock];
  }

  showProducts(objectID: string){
    return{...this.product.find(product => product.objectID)};
  }

  addNewProducts(Data: ObjectMipan){
    const DataObject = {
      // tslint:disable-next-line:radix
      objectID: (parseInt(this.product[this.product.length - 1].objectID) + 1).toString(),
      type: Data.type,
      imageURL: Data.imageURL,
      brand: Data.brand,
      model: Data.model,
      price: Data.price,
      stock: Data.stock,
      baseClock: Data.baseClock,
      boostClock: Data.boostClock,
      processorCore: Data.processorCore,
      processorThread: Data.processorThread,
      RAMSpeed: Data.RAMSpeed,
      RAMSize: Data.RAMSize,
      chipset: Data.chipset,
      supported: Data.supported,
    };
    this.product.push(DataObject);
  }
  deleteProducts(objectID){
    this.product = this.product.filter(produks => {return produks.objectID !== objectID;
    });
  }
}
