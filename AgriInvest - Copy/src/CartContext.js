import { reactive, watch } from "vue";

// Load cart items from localStorage if available
const loadCartItems = () => {
  const storedItems = localStorage.getItem("cartItems");
  return storedItems
    ? JSON.parse(storedItems).map((item) => ({
        ...item,
        price: parseFloat(item.price), // Ensure price is a number
      }))
    : [];
};

export const CartContext = reactive({
  items: loadCartItems(), // Initialize items from localStorage

  get itemCount() {
    return this.items.length;
  },

  addItem(item) {
    // Check if the item already exists in the cart
    const existingItemIndex = this.items.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      // If item exists, increment its quantity
      this.items[existingItemIndex].quantity += item.quantity;
    } else {
      // If item doesn't exist, push it into the items array
      this.items.push(item);
    }
    this.saveCart(); // Save the updated cart to localStorage
  },

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.saveCart(); // Save the updated cart to localStorage
    }
  },

  clearCart() {
    this.items = [];
    this.saveCart(); // Clear the localStorage
  },

  saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(this.items)); // Save items to localStorage
  },
});

// Watch for changes to items and save them to localStorage
watch(
  () => CartContext.items,
  () => {
    CartContext.saveCart();
  },
  { deep: true }
);
