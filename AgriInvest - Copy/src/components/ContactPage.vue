<template>
  <div class="contact-container">
    <!-- Left Container with Contact Info -->
    <div class="left-container">
      <h2>Contact Us</h2>
      <p><strong>Email:</strong> contact@website.com</p>
      <p><strong>Phone:</strong> +123 456 7890</p>
      <div class="social-media">
        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
      </div>
    </div>

    <!-- Right Container with Contact Form -->
    <div class="right-container">
      <form class="contact-form">
        <h3>Get in Touch</h3>
        <div class="input-group">
          <input type="text" placeholder="Your Name" class="neumorphic-input" required />
        </div>
        <div class="input-group">
          <input type="email" placeholder="Your Email" class="neumorphic-input" required />
        </div>
        <div class="input-group">
          <textarea placeholder="Your Message" class="neumorphic-input textarea-input" required></textarea>
        </div>
        <button type="submit" class="neumorphic-button">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage"
};
</script>

<style scoped>
/* Container Styling */
.contact-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the start */
  height: auto; /* Change height to auto */
  padding: 30px;
  background: #f0f0f3; /* Light Background for Neumorphism */
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
}

/* Left Container Styling */
.left-container {
  background: linear-gradient(45deg, #fef500, #18c729);
  border-radius: 20px;
  width: 35%;
  color: white;
  padding: 30px;
  box-shadow: 15px 15px 30px #b3b3b3, -15px -15px 30px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px; /* Space between columns on small screens */
  z-index: 1;
}

.left-container h2 {
  margin-bottom: 20px;
  font-size: 2em;
}

.left-container p {
  font-size: 1.2em;
  margin: 10px 0;
}

.left-container .social-media {
  margin-top: 20px;
}

.left-container .social-icon {
  margin: 0 10px;
  font-size: 24px;
  color: white;
  text-decoration: none;
}

.left-container .social-icon:hover {
  color: #fffd82;
}

/* Right Container Styling */
.right-container {
  width: 55%;
  padding: 50px;
  box-shadow: 20px 20px 60px #cccccc, -20px -20px 60px #ffffff;
  border-radius: 20px;
  background: #f0f0f3;
  position: relative;
  top: -50px; /* Slight Overlap */
  z-index: 0;
}

/* Contact Form Styling */
.contact-form {
  width: 100%;
}

.contact-form h3 {
  margin-bottom: 30px;
  font-size: 1.8em;
  text-align: center;
  color: #333;
}

.input-group {
  margin-bottom: 20px;
}

.neumorphic-input {
  width: 100%;
  padding: 15px;
  font-size: 1em;
  border: none;
  border-radius: 10px;
  background: #f0f0f3;
  box-shadow: inset 7px 7px 15px #d1d1d1, inset -7px -7px 15px #ffffff;
  transition: box-shadow 0.3s ease;
}

.neumorphic-input:focus {
  outline: none;
  box-shadow: inset 10px 10px 20px #c8c8c8, inset -10px -10px 20px #ffffff;
}

.textarea-input {
  height: 120px;
}

.neumorphic-button {
  display: block;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 20px;
  background: linear-gradient(45deg, #fef500, #18c729);
  box-shadow: 10px 10px 30px #c8c8c8, -10px -10px 30px #ffffff;
  color: white;
  font-size: 1.1em;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.neumorphic-button:hover {
  box-shadow: 5px 5px 15px #c8c8c8, -5px -5px 15px #ffffff;
  transform: translateY(-2px);
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .contact-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  .left-container,
  .right-container {
    width: 100%; /* Occupy full width */
    margin: 15px 0;
    padding: 20px;
    top: 0; /* Reset overlap */
    box-shadow: 10px 10px 30px #cccccc, -10px -10px 30px #ffffff;
  }

  .right-container {
    top: 0; /* Remove overlap for small screens */
  }
}

@media (max-width: 480px) {
  .left-container h2 {
    font-size: 1.5em;
  }

  .right-container {
    padding: 15px;
  }

  .neumorphic-button {
    padding: 10px;
    font-size: 1em;
  }
}
</style>
