import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, computed, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppComponent implements OnInit {

  item = signal<string>('Book');
  quantity = signal<number>(1);
  price = signal<number>(4);
  total = computed(() => this.quantity() * this.price());
  inputQty: number = 0;
  inputProductName: string = '';
  inputProductPrice: number = 0;
  inputProductQty: number = 0;
  products = signal<{
    name: string;
    price: number;
    quantity: number;
  }[]>([{ name: 'book', price: 12, quantity: 13 }]);

  ngOnInit(): void {
    this.inputQty = this.quantity();
  }

  setQuatity(): void {
    this.quantity.update(q => q = this.inputQty);
  };

  addProduct(): void {
    this.products.update(products => [...products, {
      name: this.inputProductName,
      price: this.inputProductPrice,
      quantity: this.inputProductQty
    }]);
  }

}
