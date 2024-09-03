class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    totalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.totalPrice(), 0);
    }

    displayCartItems() {
        this.items.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.totalPrice().toFixed(2)}`);
        });
    }
}

// Test the classes
const product1 = new Product(1, "Laptop", 999.99);
const product2 = new Product(2, "Smartphone", 499.99);

const cart = new ShoppingCart();

cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.displayCartItems();  // Displays cart items

console.log(`Cart Total: $${cart.getTotal().toFixed(2)}`);  // Displays the total of items inside the cart

cart.removeItem(1);  // Remove the Laptop
cart.displayCartItems();  // Displays cart items after removal
console.log(`Cart Total: $${cart.getTotal().toFixed(2)}`);