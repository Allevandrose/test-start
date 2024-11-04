<template>
  <div>
    <header class="bg-success text-white text-center py-5">
      <h1>Agriculture Blog</h1>
      <p>Latest News and Tips on Farming</p>
    </header>

    <!-- Blog List -->
    <div class="container my-5" v-if="!selectedPost">
      <div class="row">
        <div class="col-md-4" v-for="post in posts" :key="post.id">
          <div class="card mb-4 neumorphism-card">
            <img :src="post.image" class="card-img-top" alt="Post Image">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.excerpt }}</p>
              <div class="btn-group">
                <button class="btn btn-primary" @click="selectPost(post)">Read More</button>
              </div>
            </div>
            <div class="card-footer text-muted text-center">
              Posted on {{ post.date }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Blog Post Details with Neumorphism Styling -->
    <div class="container my-5 neumorphism-readmore" v-else>
      <button class="btn btn-secondary mb-4" @click="selectedPost = null">Back to Blog</button>
      <div class="row">
        <!-- Image Section -->
        <div class="col-md-6 d-flex justify-content-center align-items-center">
          <img :src="selectedPost.image" class="img-fluid rounded neumorphism-image" alt="Post Image">
        </div>
        <!-- Text Section -->
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h1 class="text-center">{{ selectedPost.title }}</h1>
          <p class="mt-4">{{ selectedPost.content }}</p>
          <p class="text-muted text-center">Published on {{ selectedPost.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPost: null, // This will hold the currently selected post
      posts: [
        {
          id: 1,
          title: 'How to Improve Soil Quality',
          image: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=600',
          excerpt: 'Learn the best methods for improving soil...',
          content: 'Full content for improving soil quality...',
          date: 'September 25, 2024'
        },
        {
          id: 2,
          title: 'Modern Irrigation Techniques',
          image: 'https://images.pexels.com/photos/2955794/pexels-photo-2955794.jpeg?auto=compress&cs=tinysrgb&w=600',
          excerpt: 'Irrigation is key to successful agriculture...',
          content: 'Full content for modern irrigation techniques...',
          date: 'September 24, 2024'
        },
        {
          id: 3,
          title: 'Benefits of Cover Crops',
          image: 'https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600',
          excerpt: 'Discover how cover crops can improve soil health and reduce erosion...',
          content: 'Full content on the benefits of cover crops...',
          date: 'September 18, 2024'
        },
        {
          id: 4,
          title: 'Integrated Pest Management (IPM) Strategies',
          image: 'https://images.pexels.com/photos/1276235/pexels-photo-1276235.jpeg?auto=compress&cs=tinysrgb&w=600',
          excerpt: 'Learn about integrated pest management to minimize pesticide use...',
          content: 'Full content on Integrated Pest Management (IPM) strategies...',
          date: 'September 19, 2024'
        },
        {
          id: 5,
          title: 'Sustainable Farming Practices',
          image: 'https://images.pexels.com/photos/321542/pexels-photo-321542.jpeg?auto=compress&cs=tinysrgb&w=600',
          excerpt: 'Implementing sustainable methods in agriculture...',
          content: 'Full content on sustainable farming practices...',
          date: 'September 21, 2024'
        }
      ]
    };
  },
  methods: {
    selectPost(post) {
      this.selectedPost = post;
    }
  }
}
</script>

<style scoped>
/* Neumorphism Style for Blog List Cards */
.neumorphism-card {
  border: none; /* Remove card border */
  box-shadow: 10px 10px 20px #b8b9be, -10px -10px 20px #ffffff; /* Neumorphism box shadow */
  border-radius: 15px;
  transition: transform 0.3s;
}

.neumorphism-card:hover {
  transform: scale(1.02);
}

/* Neumorphism Style for Read More Container */
.neumorphism-readmore {
  box-shadow: 10px 10px 30px #b8b9be, -10px -10px 30px #ffffff; /* Neumorphism box shadow */
  border-radius: 25px;
  padding: 30px;
  background: #f0f0f3;
  margin-top: 20px;
}

/* Image Neumorphism Styling */
.neumorphism-image {
  box-shadow: 8px 8px 15px #b8b9be, -8px -8px 15px #ffffff; /* Neumorphism box shadow */
  border-radius: 15px;
  max-height: 400px;
}

header {
  background-image: url('https://images.pexels.com/photos/1719669/pexels-photo-1719669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  background-size: cover;
  background-position: center;
}

.card-body .btn-group {
  display: flex;
  justify-content: center;
}

/* Text Section Styling */
h1, p {
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1); /* Light shadow effect */
}
</style>
