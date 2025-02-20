import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';  // Import RouterLink
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink // Include RouterLink so [routerLink] is recognized
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  notificationMessage: string = '';
  addedProductIds: number[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: data => this.products = data,
      error: err => console.error(err)
    });
  }

  addToCart(product: Product, quantity: number = 1): void {
    this.cartService.addToCart(product, quantity);
    this.notificationMessage = "Product Added to the Cart";
    setTimeout(() => this.notificationMessage = '', 3000);

    this.addedProductIds.push(product.id);
    setTimeout(() => {
      this.addedProductIds = this.addedProductIds.filter(id => id !== product.id);
    }, 2000);
  }
}