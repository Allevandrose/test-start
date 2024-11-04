<template>
  <div class="create-products">
    <h2>Create a New Product</h2>
    <form @submit.prevent="handleCreateProduct">
      <div class="form-group">
        <label for="productName">Product Name</label>
        <input type="text" class="form-control neumorphic-input" id="productName" v-model="productName" required />
      </div>
      <div class="form-group">
        <label for="productPrice">Price</label>
        <input type="number" class="form-control neumorphic-input" id="productPrice" v-model="productPrice" required />
      </div>
      <div class="form-group">
        <label for="productDescription">Description</label>
        <textarea class="form-control neumorphic-input" id="productDescription" v-model="productDescription" required></textarea>
      </div>
      <div class="form-group">
        <label for="productImage">Upload Image</label>
        <input type="file" class="form-control neumorphic-input" id="productImage" @change="handleImageUpload" accept="image/*" />
      </div>
      <button type="submit" class="btn neumorphic-btn">Create Product</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productName: "",
      productPrice: "",
      productDescription: "",
      productImage: null, // To store the uploaded image
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.productImage = file;
      }
    },
    handleCreateProduct() {
      const productData = {
        name: this.productName,
        price: this.productPrice,
        description: this.productDescription,
        image: this.productImage,
      };
      console.log("New Product Data:", productData);
    },
  },
};
</script>

<style scoped>
.create-products {
  background: #e0e5ec;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 8px 8px 16px #c3c3c3, -8px -8px 16px #ffffff;
}

.form-control {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 15px;
  background: #e0e5ec;
  box-shadow: inset 8px 8px 16px #c3c3c3, inset -8px -8px 16px #ffffff;
  margin-bottom: 20px;
}

.neumorphic-btn {
  background: #18c729;
  color: #ffffff;
  padding: 15px;
  border: none;
  border-radius: 30px;
  box-shadow: 8px 8px 16px #c3c3c3, -8px -8px 16px #ffffff;
}

.form-group label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}
</style>
