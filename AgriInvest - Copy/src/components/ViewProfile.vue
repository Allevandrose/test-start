<template>
  <div class="view-profile">
    <h2>Farmer Profile</h2>
    <div class="profile-card">
      <h3>{{ farmer.name }}</h3>
      <p>Email: {{ farmer.email }}</p>
      <p>Phone: {{ farmer.phone }}</p>
      <p>Location: {{ farmer.location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      farmer: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+123456789",
        location: "Green Valley",
      },
    };
  },
};
</script>

<style scoped>
.profile-card {
  padding: 30px;
  background: #e0e5ec;
  box-shadow: 8px 8px 16px #c3c3c3, -8px -8px 16px #ffffff;
  border-radius: 15px;
}
</style>
