import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IProduct } from '../../models/products.model';

@Component({
  selector: 'rippler-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() productInfo!: IProduct;
}
