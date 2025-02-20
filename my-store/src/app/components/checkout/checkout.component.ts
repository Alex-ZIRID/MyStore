import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  shippingDetails = {
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    creditCardNumber: '',
    expirationDate: '',
    cvv: ''
  };

  constructor(private cartService: CartService, private router: Router) { }

  onSubmit(): void {
    // Store user’s name and total in CartService
    this.cartService.lastOrderName = this.shippingDetails.fullName;
    this.cartService.lastOrderTotal = this.cartService.getTotal();

    // Clear the cart
    this.cartService.clearCart();

    // Navigate to order confirmation
    this.router.navigate(['/order-confirmation']);
  }
}