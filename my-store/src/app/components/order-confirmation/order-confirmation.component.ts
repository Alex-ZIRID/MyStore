import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink], // Add RouterLink here
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  name: string = '';
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.name = this.cartService.lastOrderName;
    this.total = this.cartService.lastOrderTotal;
  }
}