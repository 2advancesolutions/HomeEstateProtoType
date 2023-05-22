import { Component, computed, effect, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item = signal<string>('Book');
  quantity = signal<number>(1);
  price  = signal<number>(4);
  total = computed(() => this.quantity() * this.price());
  inputValue: number =  this.quantity();


  setQuatity(): void {
    this.quantity.update( q => q = this.inputValue);
  };

}
