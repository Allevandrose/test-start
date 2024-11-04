<template>
  <div class="view-inquiries">
    <h2>Available Inquiries</h2>
    <ul class="inquiry-list">
      <li v-for="inquiry in inquiries" :key="inquiry.id">
        <p>{{ inquiry.message }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inquiries: [
        { id: 1, message: "I want to buy 100kg of wheat." },
        { id: 2, message: "Do you sell organic fruits?" },
      ],
    };
  },
};
</script>

<style scoped>
.inquiry-list {
  list-style: none;
  padding: 0;
}

.inquiry-list li {
  background: #e0e5ec;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 6px 6px 12px #c3c3c3, -6px -6px 12px #ffffff;
  margin-bottom: 15px;
}
</style>
