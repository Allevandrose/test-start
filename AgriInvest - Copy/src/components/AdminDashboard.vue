<template>
  <div class="admin-dashboard">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h2 class="sidebar-title">Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <router-link to="/admin/users">Manage Users</router-link>
          </li>
          <li>
            <router-link to="/admin/reports">Reports</router-link>
          </li>
          <li>
            <router-link to="/admin/settings">Settings</router-link>
          </li>
          <li>
            <button @click="logout">Logout</button>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <header class="header">
        <h1>Welcome to the Admin Dashboard</h1>
        <p>Here you can manage the users and settings of your application.</p>
      </header>

      <!-- Stats Section -->
      <section class="stats">
        <div class="stat-card">
          <h3>Total Users</h3>
          <p>{{ totalUsers }}</p>
        </div>
        <div class="stat-card">
          <h3>Active Users</h3>
          <p>{{ activeUsers }}</p>
        </div>
        <div class="stat-card">
          <h3>Pending Approvals</h3>
          <p>{{ pendingApprovals }}</p>
        </div>
      </section>

      <!-- Recent Activity Section -->
      <section class="recent-activity">
        <h2>Recent User Activity</h2>
        <ul>
          <li v-for="activity in recentActivities" :key="activity.id">
            {{ activity.message }} - <span>{{ activity.date }}</span>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalUsers: 100, // Replace with actual data from API
      activeUsers: 75, // Replace with actual data from API
      pendingApprovals: 10, // Replace with actual data from API
      recentActivities: [
        { id: 1, message: "User John Doe signed up", date: "2024-11-03" },
        { id: 2, message: "User Jane Smith updated profile", date: "2024-11-02" },
        { id: 3, message: "User Alice Johnson logged in", date: "2024-11-01" },
      ],
    };
  },
  methods: {
    logout() {
      // Implement logout functionality
      console.log("User logged out");
      // Redirect to login page or perform other logout actions
    },
  },
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
  margin-bottom: 20px;
}

.sidebar nav ul {
  list-style-type: none;
  padding: 0;
}

.sidebar nav ul li {
  margin: 10px 0;
}

.sidebar nav ul li a,
.sidebar nav ul li button {
  text-decoration: none;
  color: #007bff;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.header {
  margin-bottom: 20px;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.stat-card {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  flex: 1;
  margin: 0 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.recent-activity {
  margin-top: 20px;
}

.recent-activity ul {
  list-style-type: none;
  padding: 0;
}

.recent-activity ul li {
  margin: 5px 0;
}
</style>
