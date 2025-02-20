import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  notificationMessage: string = '';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.notificationMessage = "Product Removed";
    setTimeout(() => this.notificationMessage = '', 3000);
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  updateQuantity(productId: number, newQty: number): void {
    this.cartService.updateQuantity(productId, newQty);
  }
}