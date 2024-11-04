<template>
  <div>
    <!-- Top Nav-like Container (Custom) -->
    <div class="bg-success text-white py-2">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <span class="me-3">Empowering Farmers, Growing Futures</span>
          <i class="fas fa-envelope me-1"></i>
          <span class="me-3">info@agriinvest.com</span>
          <i class="fas fa-phone-alt me-1"></i>
          <span>+123 456 789</span>
        </div>

        <div>
          <a href="#" class="text-white me-3"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="#" class="text-white me-3"
            ><i class="fab fa-whatsapp"></i
          ></a>
          <a href="#" class="text-white me-3"
            ><i class="fab fa-facebook"></i
          ></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>

    <!-- First Navbar (Bootstrap) -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top neu-navbar"
    >
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img
            src="@/assets/tree-21-64.png"
            alt="Logo"
            width="40"
            height="40"
            class="me-2"
          />
          <span class="fw-bold" style="color: #00d257">Agri-Invest</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarFirst"
          aria-controls="navbarFirst"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-list"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarFirst">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li class="nav-item dropdown me-3">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="locationDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style="color: black"
              >
                Select Location
              </a>
              <ul class="dropdown-menu" aria-labelledby="locationDropdown">
                <li><a class="dropdown-item" href="#">Location 1</a></li>
                <li><a class="dropdown-item" href="#">Location 2</a></li>
                <li><a class="dropdown-item" href="#">Location 3</a></li>
              </ul>
            </li>
            <li class="nav-item me-3">
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style="
                    color: black;
                    border: none;
                    box-shadow: inset 8px 8px 15px rgba(0, 0, 0, 0.2),
                      inset -8px -8px 15px rgba(255, 255, 255, 0.5);
                  "
                />
                <button
                  class="btn"
                  type="submit"
                  style="border: none; background: transparent"
                >
                  <i class="fas fa-search" style="color: black"></i>
                </button>
              </form>
            </li>
            <li class="nav-item">
              <router-link
                to="/cart"
                class="nav-link d-flex align-items-center"
              >
                <i class="fas fa-shopping-cart" style="color: #00d257"></i>
                <span class="badge bg-danger">{{ CartContext.itemCount }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Second Navbar (Bootstrap) -->
    <!-- Second Navbar (Bootstrap) -->
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top mt-1 neu-navbar"
    >
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSecond"
          aria-controls="navbarSecond"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-list"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSecond">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/" style="color: #00d257">
                <i class="fas fa-home me-1"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile" style="color: #ff5733">
                <i class="fas fa-user me-1"></i> Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/products" style="color: #3498db">
                <i class="fas fa-box me-1"></i> Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/categories" style="color: #9b59b6">
                <i class="fas fa-th-list me-1"></i> Categories
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog" style="color: #e67e22">
                <i class="fas fa-blog me-1"></i> Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact" style="color: #1abc9c">
                <i class="fas fa-address-book me-1"></i> Contacts
              </a>
            </li>
            <!-- New Farmer Dashboard Link -->
            <li class="nav-item">
              <a
                class="nav-link"
                href="/farmer-dashboard"
                style="color: #8e44ad"
              >
                <i class="fas fa-tractor me-1"></i> Farmer Dashboard
              </a>
            </li>
          </ul>

          <ul
            class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center"
            style="align-items: center"
          >
            <li class="nav-item me-2">
              <router-link to="/login" class="btn neu-button"
                >Login</router-link
              >
            </li>
            <li class="nav-item me-2">
              <router-link to="/signup" class="btn neu-button"
                >Signup</router-link
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/profile">
                <i class="fas fa-user" style="color: black"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Slot for page content -->
    <router-view />
  </div>
</template>

<script>
import { CartContext } from "@/CartContext"; // Import the CartContext

export default {
  name: "AppLayout",
  setup() {
    return {
      CartContext,
    };
  },
};
</script>

<style scoped>
/* Optional custom styles */
.neu-navbar {
  border-radius: 20px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1),
    -10px -10px 20px rgba(255, 255, 255, 0.9);
}

.navbar {
  background: #ffffff;
}

.navbar-toggler {
  border: none;
}

.nav-link,
.btn {
  border: none;
  background: transparent;
  box-shadow: none;
}

.nav-link:focus,
.btn:focus {
  outline: none;
}

/* Neumorphic Button Styles */
.neu-button {
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background: #e0e0e0;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
    -5px -5px 15px rgba(255, 255, 255, 0.5);
  color: #00d257;
}
</style>
