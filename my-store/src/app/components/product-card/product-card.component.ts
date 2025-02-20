import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCartEvent = new EventEmitter<{ product: Product; quantity: number }>();

  added: boolean = false;

  addToCart(quantity: number): void {
    this.added = true;
    this.addToCartEvent.emit({ product: this.product, quantity });
   
    setTimeout(() => this.added = false, 2000);
  }
}