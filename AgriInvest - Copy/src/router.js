import { createRouter, createWebHistory } from "vue-router";
import { AuthContext } from "@/auth";
import HomePage from "./components/HomePage.vue";
import UserProfile from "./components/UserProfile.vue";
import AppLayout from "./components/AppLayout.vue";
import ProductCard from "./components/ProductCard.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import ContactPage from "./components/ContactPage.vue";
import BlogPage from "./components/BlogPage.vue";
import CategoriesPage from "./components/CategoriesPage.vue";
import CartPage from "./components/CartPage.vue";
import CheckoutPage from "./components/CheckoutPage.vue";
import FarmerDashboard from "./components/FarmerDashboard.vue";
import AdminDashboard from "./components/AdminDashboard.vue"; // Import AdminDashboard

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      { path: "", component: HomePage },
      { path: "profile", component: UserProfile },
      { path: "products", component: ProductCard },
      { path: "login", component: LogIn },
      { path: "signup", component: SignUp },
      { path: "contact", component: ContactPage },
      { path: "blog", component: BlogPage },
      { path: "categories", component: CategoriesPage },
      { path: "cart", component: CartPage },
      { path: "checkout", component: CheckoutPage },
      {
        path: "farmer-dashboard",
        component: FarmerDashboard,
        meta: { requiresRole: "farmer" },
      },
      {
        path: "admin-dashboard",
        component: AdminDashboard,
        meta: { requiresRole: "admin" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add a global navigation guard for role-based access control
router.beforeEach((to, from, next) => {
  if (to.meta.requiresRole) {
    if (
      AuthContext.isLoggedIn &&
      AuthContext.isAuthorized(to.meta.requiresRole)
    ) {
      next();
    } else {
      next({ path: "/login" }); // Redirect to login if not authorized
    }
  } else {
    next();
  }
});

export default router;
