<template>
  <footer class="footer-container text-white text-center py-4">
    <div class="container">
      <div class="row">

        <!-- Column 1: About -->
        <div class="col-md-4 mb-4 mb-md-0">
          <h5>About Us</h5>
          <p class="small">
            We provide the best services in the industry. Our mission is to deliver quality experiences to our customers.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="col-md-4 mb-4 mb-md-0">
          <h5>Quick Links</h5>
          <ul class="list-unstyled link-column">
            <li><a href="/" class="footer-link">Home</a></li>
            <li><a href="/profile" class="footer-link">Profile</a></li>
            <li><a href="/blog" class="footer-link">Blog</a></li>
            <li><a href="/products" class="footer-link">Products</a></li>
            <li><a href="/categories" class="footer-link">Categories</a></li>

          </ul>
        </div>

        <!-- Column 3: Social Media -->
        <div class="col-md-4">
          <h5>Follow Us</h5>
          <ul class="list-unstyled social-icons d-flex justify-content-center">
            <li><a href="#" class="footer-link mx-2"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="footer-link mx-2"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#" class="footer-link mx-2"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="footer-link mx-2"><i class="fab fa-linkedin"></i></a></li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom section: Copyright -->
    <div class="py-2 mt-4">
      <p class="mb-0 small">
        &copy; 2024 Your Company. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped>
.footer-container {
  background: linear-gradient(45deg, #fef500, #18c729);
}

h5 {
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
}

/* Updated Styles for Quick Links */
ul.link-column {
  text-align: center;
  display: block;
}

ul.link-column li {
  margin: 10px 0; /* Added space between each link */
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 15px;
}

.footer-link:hover {
  text-decoration: underline;
}

ul.social-icons {
  margin-top: 10px;
}

ul.social-icons li {
  display: inline-block;
}

ul.social-icons li a i {
  font-size: 20px;
  color: white;
}

.container {
  padding-top: 20px;
}

footer {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
