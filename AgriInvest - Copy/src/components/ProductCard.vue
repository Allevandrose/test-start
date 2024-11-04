<template>
  <div class="container">
    <h3 class="title">Organic Products</h3>
    <div class="products-container">
      <div class="product" v-for="product in products" :key="product.id" :data-name="product.name" @click="showPreview(product.id)">
        <img :src="product.image" alt="Product Image">
        <h3>{{ product.name }}</h3>
        <div class="price">{{ product.price }}</div>
      </div>
    </div>

    <div class="products-preview" v-if="activeProduct">
      <div class="preview">
        <i class="bx bx-x" @click="closePreview"></i>
        <img :src="activeProduct.image" alt="Product Image">
        <h3>{{ activeProduct.name }}</h3>
        <div class="stars">
          <i class='bx bxs-star' v-for="star in 5" :key="star"></i>
          <span>( 250 )</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
        <div class="price">{{ activeProduct.price }}</div>
        <div class="buttons">
          <a href="#" class="buy">Buy Now</a>
          <a href="#" class="cart" @click.prevent="addToCart(activeProduct)">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CartContext } from '@/CartContext'; // Adjust the import path to your actual CartContext location

export default {
  data() {
    return {
      products: [
        { id: 'p-1', name: 'Strawberries', price: 2.00, image: require('@/assets/images/1.png') },
        { id: 'p-2', name: 'Onions', price: 2.00, image: require('@/assets/images/2.png') },
        { id: 'p-3', name: 'Tomatoes', price: 2.00, image: require('@/assets/images/3.png') },
        { id: 'p-4', name: 'Brinjal', price: 2.00, image: require('@/assets/images/4.png') },
        { id: 'p-5', name: 'Broccoli', price: 2.00, image: require('@/assets/images/5.png') },
        { id: 'p-6', name: 'Potatoes', price: 2.00, image: require('@/assets/images/6.png') },
      ],
      activeProduct: null,
    };
  },
  methods: {
    showPreview(productId) {
      this.activeProduct = this.products.find(product => product.id === productId);
    },
    closePreview() {
      this.activeProduct = null;
    },
    addToCart(product) {
      const item = { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        image: product.image, // Ensure image is included
        quantity: 1 
      };
      CartContext.addItem(item); // Use CartContext to add the item to the cart
      alert(`${product.name} has been added to your cart!`); // Optional feedback
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600&display=swap');

* {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  transition: all 0.2s linear;
  text-transform: capitalize;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

body {
  background: #eee;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}

.container .title {
  font-size: 3.5rem;
  color: #444;
  margin-bottom: 3rem;
  text-transform: uppercase;
  text-align: center;
}

.container .products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.container .products-container .product {
  text-align: center;
  padding: 20px; /* Increased padding */
  background: #fff;
  width: 300px;
  height: 350px; /* Increased height */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s;
  cursor: pointer;
}

.container .products-container .product:hover {
  transform: translateY(-2px);
}

.container .products-container .product img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.container .products-container .product h3 {
  padding: 0.5rem 0;
  font-size: 1.6rem;
  color: #444;
}

.container .products-container .product .price {
  font-size: 1.4rem;
  color: #444;
}

.products-preview {
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.products-preview .preview {
  padding: 2rem; /* Increased padding */
  text-align: center;
  background: #fff;
  position: relative;
  margin: 1rem;
  width: 500px;
  height: 600px;
  overflow: hidden;
}

.products-preview .preview img {
  height: 15rem; /* Adjusted height for the product image */
  object-fit: cover;
}

.products-preview .preview .bx-x {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  cursor: pointer;
  color: #444;
  font-size: 3rem;
}

.products-preview .preview .bx-x:hover {
  transform: rotate(90deg);
}

.products-preview .preview h3 {
  color: #444;
  padding: 0.5rem 0;
  font-size: 2rem;
}

.products-preview .preview .stars {
  padding: 0.5rem 0;
  font-size: 1.5rem;
}

.products-preview .preview .stars i {
  color: #27ae60;
}

.products-preview .preview .stars span {
  color: #999;
}

.products-preview .preview p {
  line-height: 1.4;
  padding: 0.5rem 0;
  font-size: 1.2rem;
  color: #777;
  overflow: hidden;
  max-height: 5rem;
}

.products-preview .preview .price {
  padding: 0.5rem 0;
  font-size: 1.6rem;
  color: #27ae60;
}

.products-preview .preview .buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.products-preview .preview .buttons a {
  flex: 1 1 12rem; 
  padding: 0.5rem;
  font-size: 1.4rem;
  color: #fff; /* Changed text color to white */
  height: 40px; 
  line-height: 40px;
  background: linear-gradient(45deg, #fef500, #18c729); /* Applying gradient */
  border-radius: 5px; /* Adding border radius */
  display: flex; /* Flexbox for centering */
  align-items: center; /* Centering vertically */
  justify-content: center; /* Centering horizontally */
}

.products-preview .preview .buttons a.cart {
  background: linear-gradient(45deg, #fef500, #18c729); /* Same gradient */
}

.products-preview .preview .buttons a.cart:hover {
  background: linear-gradient(45deg, #444, #555); /* Updated hover state with gradient */
}

.products-preview .preview .buttons a.buy:hover {
  background: linear-gradient(45deg, #444, #555); /* Updated hover state with gradient */
}
</style>

