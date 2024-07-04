import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductsService } from 'src/app/modules/products/services/products.service';
import { IProduct } from '../models/products.model';

@Component({
  selector: 'rippler-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  productList$: Observable<IProduct[]> = this.productsService.getProducts();

  constructor(private productsService: ProductsService) {}

  /**
  * This function tracks the items by id to improve performance when the list keeps on changing
  * @param {IProduct} product
  * @returns {number}
  */
  trackByFn(_: number, product: IProduct): number {
    return product.id;
  }
}
