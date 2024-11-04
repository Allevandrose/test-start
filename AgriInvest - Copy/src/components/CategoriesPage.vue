<template>
  <div class="categories-page">
    <!-- Page Title -->
    <h1 class="page-title">Categories</h1>

    <!-- Search Bar -->
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search categories..."
        class="neumorphic-input"
      />
    </div>

    <!-- Categories Container -->
    <div class="categories-container">
      <!-- Iterate through filtered categories -->
      <div
        v-for="category in filteredCategories"
        :key="category.name"
        class="category-card neumorphic-card"
      >
        <!-- Category Icon -->
        <div class="category-icon" :style="{ backgroundColor: category.color }">
          <i :class="category.icon"></i>
        </div>
        <!-- Category Name -->
        <h3 class="category-name">{{ category.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriesPage",
  data() {
    return {
      searchQuery: "", // Holds the search input value
      // Categories Array
      categories: [
        { name: "Grains", icon: "fa-solid fa-jar-wheat", color: "#FFD700" }, // Wheat icon updated
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
    // Computed property to filter categories based on search input
    filteredCategories() {
      return this.categories.filter((category) =>
        category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* Container for the categories page */
.categories-page {
  width: 100%;
  padding: 50px;
  background: #e0e5ec;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Page Title */
.page-title {
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
}

/* Search Bar Styling */
.search-bar {
  width: 60%;
  margin-bottom: 30px;
}

.neumorphic-input {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 30px;
  font-size: 1em;
  background: #e0e5ec;
  box-shadow: inset 8px 8px 16px #c3c3c3, inset -8px -8px 16px #ffffff;
  transition: all 0.3s ease;
}

.neumorphic-input:focus {
  outline: none;
  box-shadow: inset 8px 8px 12px #c3c3c3, inset -8px -8px 12px #ffffff;
}

/* Categories Container */
.categories-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 80%;
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

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  .categories-page {
    padding: 20px;
  }
  .search-bar {
    width: 80%;
  }
}

@media (max-width: 480px) {
  .categories-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .neumorphic-input {
    padding: 10px;
  }
}
</style>
