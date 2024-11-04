<template>
  <div class="container my-4 cart-container">
    <h2 class="text-center">Your Cart</h2>
    <div v-if="items.length === 0" class="alert alert-warning text-center" role="alert">
      Your cart is empty!
    </div>
    <div v-else>
      <div class="list-group">
        <div
          v-for="item in items"
          :key="item.id"
          class="list-group-item d-flex justify-content-between align-items-center cart-item"
        >
          <div class="d-flex align-items-center">
            <img :src="item.image" alt="Product Image" class="cart-image" />
            <div class="ml-3">
              <h5 class="mb-1">{{ item.name }}</h5>
              <p class="mb-1">Price: ${{ item.price.toFixed(2) }}</p>
              <p class="mb-1">Quantity: {{ item.quantity }}</p>
            </div>
          </div>
          <button @click="removeItem(item)" class="btn btn-danger">Remove</button>
        </div>
      </div>
      <h3 class="mt-3 text-right">Total: ${{ total.toFixed(2) }}</h3>
      <router-link to="/checkout" class="btn btn-success mt-3 w-100">Proceed to Checkout</router-link>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { CartContext } from '@/CartContext';

export default {
  name: "CartPage",
  setup() {
    const items = CartContext.items;

    const total = computed(() => {
      return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });

    const removeItem = (item) => {
      CartContext.removeItem(item);
    };

    return {
      items,
      total,
      removeItem,
    };
  },
};
</script>

<style scoped>
.cart-container {
  background: #ffffff; /* Changed to white for contrast */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.cart-container:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.list-group-item {
  border: none;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #f9f9f9; /* Light gray background */
  transition: transform 0.2s, box-shadow 0.2s;
}

.list-group-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.cart-image {
  width: 70px; /* Increased for better visibility */
  height: auto;
  border-radius: 5px;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
  transition: background-color 0.3s;
}

.btn-danger:hover {
  background-color: #c82333; /* Darker shade on hover */
}

.btn-success {
  background-color: #28a745;
  color: white;
  transition: background-color 0.3s;
}

.btn-success:hover {
  background-color: #218838; /* Darker shade on hover */
}

/* Responsive styles */
@media (max-width: 768px) {
  .cart-container {
    padding: 10px; /* Reduce padding on smaller screens */
  }

  .list-group-item {
    flex-direction: column; /* Stack items on small screens */
    align-items: flex-start;
  }

  .ml-3 {
    margin-left: 0; /* Remove margin for small screens */
    margin-top: 10px; /* Add top margin */
  }
}
</style>
