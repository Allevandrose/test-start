<template>
  <div class="user-profile">
    <div class="left-section">
      <h2 class="welcome-text">
        Welcome, {{ isLoggedIn ? userRole : "Guest" }}
      </h2>
    </div>
    <div class="right-section">
      <img :src="profileImage" alt="Profile Photo" class="profile-image" />
      <div class="user-data" v-if="isLoggedIn">
        <p class="role">Role: {{ userRole }}</p>
        <p class="region">Region: {{ userRegion }}</p>
      </div>
      <p v-if="!isLoggedIn" class="login-message">Please login first</p>
      <router-link
        v-if="!isLoggedIn"
        to="/login"
        class="login-button"
        style="text-decoration: none;"
      >
        Login
      </router-link>
    </div>
  </div>
</template>

<script>
import userProfileImage from "@/assets/user-64.png"; // Import profile image

export default {
  data() {
    return {
      isLoggedIn: false, // Change this based on your authentication logic
      profileImage: userProfileImage, // Placeholder image before login
      userRole: "Farmer", // Example role
      userRegion: "Nairobi", // Example region
    };
  },
  methods: {
    login() {
      // Implement login logic here
      alert("Login button clicked!");
    },
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column; /* Change to column for better responsiveness */
  align-items: center;
  width: 100%; /* Use full width for better responsiveness */
  max-width: 600px; /* Set a max width for larger screens */
  height: auto; /* Allow height to adjust based on content */
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Clip the gradient and sections neatly */
  margin: 20px auto; /* Center the profile */
}

.left-section {
  width: 100%; /* Full width for left section */
  background: linear-gradient(45deg, #fef500, #18c729); /* Applying gradient */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Add padding for better spacing */
}

.welcome-text {
  color: white;
  font-size: 1.5em; /* Adjusted font size for better readability */
  font-weight: bold;
  text-align: center; /* Center align text for better aesthetics */
}

.right-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px; /* Add padding for better spacing */
}

.profile-image {
  width: 140px; /* Larger profile image */
  height: 140px; /* Larger profile image */
  border-radius: 50%;
  border: 3px solid #18c729; /* Border matching the gradient */
  margin-bottom: 20px; /* Space between image and user data */
}

.user-data {
  text-align: center;
}

p {
  margin: 5px 0;
  color: #333;
}

.role,
.region {
  font-weight: bold; /* Highlight role and region */
}

.login-message {
  color: #333; /* Dark color for the login message */
  margin-top: 10px; /* Space above the message */
}

.login-button {
  padding: 10px 20px;
  background-color: #18c729;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #159c1a;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .welcome-text {
    font-size: 1.2em; /* Smaller font size on mobile */
  }

  .profile-image {
    width: 100px; /* Smaller image on mobile */
    height: 100px; /* Smaller image on mobile */
  }
}
</style>
