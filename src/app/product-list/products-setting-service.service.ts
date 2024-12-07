import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import productModel from '../models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsSettingServiceService {

  productItem!: productModel

  constructor(private http : HttpClient) {}

  getJson() : Observable<productModel[]>  {
    return this.http.get<productModel[]>('../../assets/data.json')
  }

  getProductById(productId: number) : Observable<productModel | undefined> {
    return this.getJson().pipe(
      map(data => {
        const product = data.find(product => product.id === productId);
        return product;
      })
    );
  }
}
