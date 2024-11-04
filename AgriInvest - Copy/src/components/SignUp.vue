<template>
  <div class="container mt-5 neumorphic-container">
    <h2 class="text-center mb-4">Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <!-- Name Field -->
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control neumorphic-input"
          id="name"
          v-model="name"
          required
          aria-describedby="nameHelp"
        />
        <small id="nameHelp" class="form-text text-muted">Enter your full name.</small>
      </div>

      <!-- Email Field -->
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control neumorphic-input"
          id="email"
          v-model="email"
          required
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <!-- Phone Number Field -->
      <div class="form-group" v-if="isFarmer || isClient">
        <label for="phone">Phone Number</label>
        <input
          type="tel"
          class="form-control neumorphic-input"
          id="phone"
          v-model="phone"
          required
        />
        <small id="phoneHelp" class="form-text text-muted">Enter a valid phone number.</small>
      </div>

      <!-- Location Field for Farmers -->
      <div class="form-group" v-if="isFarmer">
        <label for="location">Location</label>
        <input
          type="text"
          class="form-control neumorphic-input"
          id="location"
          v-model="location"
          required
        />
        <small id="locationHelp" class="form-text text-muted">Specify your current location.</small>
      </div>

      <!-- Password Field -->
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control neumorphic-input"
          id="password"
          v-model="password"
          required
          minlength="6"
        />
        <small class="form-text text-muted">Password must be at least 6 characters.</small>
      </div>

      <!-- Profile Image Field -->
      <div class="form-group">
        <label for="profileImage">Upload Profile Image</label>
        <input
          type="file"
          class="form-control-file"
          id="profileImage"
          @change="handleFileUpload"
          accept="image/*"
        />
        <small id="imageHelp" class="form-text text-muted">Choose a profile image (JPEG, PNG).</small>
      </div>

      <!-- User Type Selection -->
      <div class="form-group">
        <label>User Type</label>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="isFarmer"
            v-model="isFarmer"
            @change="handleUserTypeChange"
          />
          <label class="form-check-label" for="isFarmer">Farmer</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="isClient"
            v-model="isClient"
            @change="handleUserTypeChange"
          />
          <label class="form-check-label" for="isClient">Client</label>
        </div>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</template>

<script>
import api from "@/services/api"; // Import the API instance
import Swal from 'sweetalert2'; // Import SweetAlert2

export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      location: '',
      password: '',
      isFarmer: false,
      isClient: false,
      profileImage: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.profileImage = event.target.files[0];
    },
    handleUserTypeChange() {
      // Ensure at least one user type is selected
      if (!this.isFarmer && !this.isClient) {
        this.isFarmer = false;
        this.isClient = false;
      }
    },
    async handleSignUp() {
      // Determine user type and API endpoint
      const userType = this.isFarmer ? 'farmer' : 'consumer'; // consumer for clients
      const registrationData = {
        consumer_name: this.name, // Updated to use consumer field names
        consumer_email: this.email,
        consumer_phone: this.phone,
        consumer_location: this.isFarmer ? this.location : undefined, // Only for farmers
        consumer_password: this.password,
      };

      try {
        const response = await api.post(`/${userType}/register`, registrationData);

        // Check if response status is success
        if (response.status === 200) {
          Swal.fire({
            title: 'Success!',
            text: 'Your account has been created successfully!',
            icon: 'success',
            confirmButtonText: 'Okay'
          });

          this.clearForm(); // Clear form after successful registration
          this.$router.push("/login"); // Redirect to login page
        }
      } catch (error) {
        console.error('Registration error:', error);
        
        // Show error alert based on response
        const errorMessage = error.response?.data?.message || 'An error occurred during registration. Please try again.';
        Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      }
    },
    clearForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.location = '';
      this.password = '';
      this.isFarmer = false;
      this.isClient = false;
      this.profileImage = null;
    },
  },
};
</script>

<style scoped>
.neumorphic-container {
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.1), -8px -8px 20px rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 30px;
}
</style>
