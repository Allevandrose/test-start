<template>
  <!-- Carousel Component -->
  <CarouselComponent />
  
  <!-- Featured Products Section -->
  <h1 class="heading">Featured Products</h1>
  
  <!-- Product Cards Container -->
  <div class="products-container">
    <!-- Product Card 1 -->
    <ProductCard />
    <!-- Product Card 2 -->
    <ProductCard />
    <!-- Product Card 3 -->
    <ProductCard />
    <!-- Product Card 4 -->
    <ProductCard />
    <!-- Product Card 5 -->
    <ProductCard />
    <!-- Product Card 6 -->
    <ProductCard />
    <!-- Product Card 7 -->
    <ProductCard />
    <!-- Product Card 8 -->
    <ProductCard />
  </div>
  
  <!-- Categories Display Section with 4 Categories -->
  <h1 class="heading">Featured Categories</h1>
  <div class="categories-container">
    <div class="category-card neumorphic-card" v-for="category in selectedCategories" :key="category.name">
      <div class="category-icon" :style="{ backgroundColor: category.color }">
        <i :class="category.icon"></i>
      </div>
      <h3 class="category-name">{{ category.name }}</h3>
    </div>
  </div>
</template>

<script>
import CarouselComponent from "./Carousel.vue"; // Import CarouselComponent
import ProductCard from "./ProductCard.vue"; // Import ProductCard

export default {
  components: {
    CarouselComponent, // Register the CarouselComponent
    ProductCard, // Register the ProductCard component
  },
  data() {
    return {
      // Extracted Categories
      categories: [
        { name: "Grains", icon: "fa-solid fa-jar-wheat", color: "#FFD700" },
        { name: "Vegetables", icon: "fas fa-carrot", color: "#32CD32" },
        { name: "Legumes", icon: "fas fa-seedling", color: "#98FB98" },
        { name: "Fruits", icon: "fas fa-apple-alt", color: "#FF6347" },
        { name: "Nuts and Seeds", icon: "fas fa-pepper-hot", color: "#D2691E" },
        { name: "Herbs and Spices", icon: "fas fa-leaf", color: "#8FBC8F" },
        { name: "Cereals and Pulses", icon: "fas fa-cookie", color: "#DAA520" },
        { name: "Oilseeds", icon: "fas fa-oil-can", color: "#FFA500" },
      ],
    };
  },
  computed: {
    // Select 4 categories for the featured section
    selectedCategories() {
      return this.categories.slice(0, 4);
    },
  },
};
</script>

<style scoped>
/* Styling for the heading */
.heading {
  text-align: center;
  font-size: 2em;
  margin-top: 20px;
}

/* Products Container Styling */
.products-container {
  display: flex;
  flex-wrap: wrap; /* Ensure the cards wrap onto the next line */
  justify-content: center; /* Center the cards */
  gap: 20px; /* Spacing between the product cards */
  margin: 30px auto; /* Add margin around the cards */
}

/* Categories Container for the Featured Section */
.categories-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  margin: 30px 0;
}

/* Neumorphic Card Styling */
.neumorphic-card {
  background: #e0e5ec;
  border-radius: 20px;
  box-shadow: 12px 12px 20px #c8d0e7, -12px -12px 20px #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
}

.neumorphic-card:hover {
  box-shadow: 8px 8px 16px #c8d0e7, -8px -8px 16px #ffffff;
}

/* Category Icon Styling */
.category-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 8px 8px 16px #c8d0e7, -8px -8px 16px #ffffff;
}

.category-icon i {
  font-size: 36px;
  color: #ffffff;
}

/* Category Name */
.category-name {
  font-size: 1.2em;
  font-weight: 500;
  color: #333333;
}
</style>
