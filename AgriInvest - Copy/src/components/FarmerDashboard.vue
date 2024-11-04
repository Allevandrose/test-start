<template>
  <div class="dashboard-container">
    <!-- Sidebar with Navigation Links -->
    <aside class="sidebar">
      <h3 class="sidebar-title">Farmer Dashboard</h3>
      <ul class="nav-list">
        <li @click="changeTab('create-products')" class="nav-item" :class="{ active: currentTab === 'create-products' }">
          <i class="fas fa-seedling nav-icon"></i> Create Products
        </li>
        <li @click="changeTab('view-profile')" class="nav-item" :class="{ active: currentTab === 'view-profile' }">
          <i class="fas fa-user nav-icon"></i> View Profile
        </li>
        <li @click="changeTab('view-inquiries')" class="nav-item" :class="{ active: currentTab === 'view-inquiries' }">
          <i class="fas fa-envelope-open-text nav-icon"></i> View Inquiries
        </li>
        <li @click="changeTab('weather-updates')" class="nav-item" :class="{ active: currentTab === 'weather-updates' }">
          <i class="fas fa-cloud-sun-rain nav-icon"></i> Weather Updates
        </li>
        <li @click="changeTab('medical-updates')" class="nav-item" :class="{ active: currentTab === 'medical-updates' }">
          <i class="fas fa-briefcase-medical nav-icon"></i> Medical Updates
        </li>
      </ul>
    </aside>

    <!-- Main Content Area -->
    <div class="main-content">
      <!-- Render the selected tab's content dynamically -->
      <component :is="currentTabComponent" class="tab-content"></component>
    </div>
  </div>
</template>

<script>
import CreateProducts from "./CreateProducts.vue";
import ViewProfile from "./ViewProfile.vue";
import ViewInquiries from "./ViewInquiries.vue";
import WeatherUpdates from "./WeatherUpdates.vue"; // Placeholder component
import MedicalUpdates from "./MedicalUpdates.vue"; // Placeholder component

export default {
  components: {
    CreateProducts,
    ViewProfile,
    ViewInquiries,
    WeatherUpdates,
    MedicalUpdates,
  },
  data() {
    return {
      currentTab: "create-products",
    };
  },
  computed: {
    currentTabComponent() {
      switch (this.currentTab) {
        case "create-products":
          return "CreateProducts";
        case "view-profile":
          return "ViewProfile";
        case "view-inquiries":
          return "ViewInquiries";
        case "weather-updates":
          return "WeatherUpdates";
        case "medical-updates":
          return "MedicalUpdates";
        default:
          return "CreateProducts";
      }
    },
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<style scoped>
/* General Styles */
body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  background: #f5f6fa;
}

.dashboard-container {
  display: flex;
  flex-direction: row; /* Ensure items are in a row by default */
  height: 100vh;
  background: linear-gradient(to right, #ffffff, #f5f5f5);
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  min-width: 250px;
  background: linear-gradient(45deg, #fef500, #18c729); /* Applying gradient */
  color: #ecf0f1;
  padding: 20px;
  border-radius: 12px;
  margin: 20px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.2), -8px -8px 20px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.sidebar-title {
  font-size: 1.6em;
  margin-bottom: 30px;
  text-align: center;
  color: #ecf0f1;
  letter-spacing: 1px;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin: 10px 0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(255, 255, 255, 0.2); /* Light hover effect */
  box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.7);
}

.nav-icon {
  margin-right: 15px;
  font-size: 1.4em;
}

.main-content {
  flex: 1;
  padding: 40px;
  background: #ecf0f1;
  border-radius: 12px;
  margin: 20px;
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.2), -8px -8px 20px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

/* Neumorphic Tab Content Styles */
.tab-content {
  background: #ffffff;
  border-radius: 15px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.7);
  padding: 30px;
  transition: all 0.3s ease;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .dashboard-container {
    flex-direction: column; /* Stack elements in column on smaller screens */
  }

  .sidebar {
    width: 100%; /* Full width on smaller screens */
    margin-bottom: 20px; /* Margin at the bottom for spacing */
  }

  .main-content {
    margin: 0; /* Reset margin for full width */
    padding: 20px;
  }
}

@media (max-width: 768px) {
  .sidebar-title {
    font-size: 1.4em; /* Smaller font size */
  }

  .nav-item {
    padding: 10px 12px; /* Smaller padding */
    font-size: 0.9em; /* Smaller font size */
  }

  .nav-icon {
    font-size: 1.2em; /* Smaller icon size */
  }

  .main-content {
    padding: 15px; /* Smaller padding */
  }

  .tab-content {
    padding: 20px; /* Smaller padding */
  }
}

@media (max-width: 480px) {
  .sidebar-title {
    font-size: 1.2em; /* Even smaller font size */
  }

  .nav-item {
    padding: 8px 10px; /* Further reduced padding */
    font-size: 0.8em; /* Further reduced font size */
  }

  .nav-icon {
    font-size: 1em; /* Further reduced icon size */
  }

  .main-content {
    padding: 10px; /* Further reduced padding */
  }

  .tab-content {
    padding: 15px; /* Further reduced padding */
  }
}
</style>
