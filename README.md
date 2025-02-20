# The Laptop Accessory Store

This project is a single-page e-commerce web application built with Angular. The app lets users browse a variety of laptop accessory products, view detailed product pages, add items to a shopping cart, update quantities in real time, proceed to checkout, and receive an order confirmation.

## Features

- **Product List Page:**  
  Displays a responsive grid of products with images, descriptions, and prices. Clicking on a product image navigates to its detailed view.

- **Product Detail Page:**  
  Shows a single product with a quantity selector and an add-to-cart button, plus a "Back to Product List" link.

- **Cart Page:**  
  Allows users to update item quantities with up/down arrows, remove items, and view a dynamically updated total.

- **Checkout Flow:**  
  A checkout form collects user details (full name, address, credit card information). Upon submission, the app displays an order confirmation.

- **Order Confirmation Page:**  
  Displays a personalized thank-you message including the user's name, order total, and shipping information.

## Technologies Used

- **Angular** (stand-alone components)
- **TypeScript**
- **RxJS** for reactive state management
- **Angular Router** for navigation
- **Template-driven Forms**
- **CSS Grid** for responsive layouts

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Angular CLI](https://angular.io/cli)

### Installation

1. **Clone the repository:**

   git clone https://github.com/Alex-ZIRID/MyStore.git
   cd my-store

2. **Install dependencies:**

   npm install

3. **Running the Application:**

   ng serve

---

Project Structure
• src/app/
• components/
Contains all Angular components: Product List, Product Detail, Cart, Checkout, Order Confirmation, and Header.
  
 • models/
Contains TypeScript models (e.g., product.model.ts, cart-item.model.ts).
  
 • services/
Contains services for product data fetching and cart management.
  
 • app.routes.ts
Contains the route definitions.
  
 • app.component.ts/html/css
The root component of the application.
  
 • src/assets/
Contains static assets such as product images and data.json.

Customization
• Data Source:
Product information is stored in src/assets/data.json. Feel free to update or extend this file to change the products shown in the store.
• Styling:
Global styles are defined in src/styles.css, with component-specific styles in each component’s CSS file.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
• Angular
• Google Fonts - Montserrat
