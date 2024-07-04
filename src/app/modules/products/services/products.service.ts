import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import mockProducts from "src/assets/mocks/products.json"
import { IProduct } from "../models/products.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /**
  * This function makes the call to get the product list. Here we are getting mock data from json
  * @returns {Observable<IProduct[]>}
  */
  getProducts(): Observable<IProduct[]> {
    return of(mockProducts);
  }
}
