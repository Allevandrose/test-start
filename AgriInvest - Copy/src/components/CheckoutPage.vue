<template>
  <div class="container my-4 checkout-container">
    <h2>Checkout</h2>
    <div v-if="items.length === 0" class="alert alert-warning" role="alert">
      Your cart is empty!
    </div>
    <div v-else>
      <div class="list-group">
        <div
          v-for="item in items" 
          :key="item.id" 
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div class="d-flex align-items-center">
            <img :src="item.image" alt="Product Image" class="cart-image" />
            <div class="ml-3">
              <h5 class="mb-1">{{ item.name }}</h5>
              <p class="mb-1">Price: ${{ item.price.toFixed(2) }}</p>
              <p class="mb-1">Quantity: {{ item.quantity }}</p>
            </div>
          </div>
        </div>
      </div>
      <h3 class="mt-3">Total: ${{ total.toFixed(2) }}</h3>

      <form @submit.prevent="handleCheckout" class="mt-4">
        <div class="form-group">
          <label for="name">Full Name:</label>
          <input type="text" v-model="form.name" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="form.email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="address">Shipping Address:</label>
          <input type="text" v-model="form.address" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="cardNumber">Card Number:</label>
          <input type="text" v-model="form.cardNumber" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="expiryDate">Expiry Date:</label>
          <input type="text" v-model="form.expiryDate" placeholder="MM/YY" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input type="text" v-model="form.cvv" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-success mt-3">Complete Purchase</button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { CartContext } from '@/CartContext';

export default {
  name: "CheckoutPage",
  setup() {
    const items = CartContext.items;
    const total = computed(() => {
      return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });

    const form = ref({
      name: '',
      email: '',
      address: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    });

    const handleCheckout = () => {
      alert(`Thank you for your purchase, ${form.value.name}!`);
      CartContext.clearCart(); // Clear the cart after checkout
    };

    return {
      items,
      total,
      form,
      handleCheckout,
    };
  },
};
</script>

<style scoped>
.checkout-container {
  background: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-image {
  width: 50px;
  height: auto;
  border-radius: 5px;
}

.list-group-item {
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
}
</style>
