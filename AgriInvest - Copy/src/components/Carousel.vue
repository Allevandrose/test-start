<template>
  <!-- Carousel Section Start -->
  <div class="hero">
    <div class="carousel">
      <div
        class="carousel-item"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ backgroundImage: `url(${slide.image})` }"
        :class="{ active: index === currentIndex, fading: index !== currentIndex }"
      >
        <div class="overlay"></div>
        <div class="carousel-content">
          <h2 :class="{ 'float-in-top': index === currentIndex }">{{ slide.title }}</h2>
          <p :class="{ 'float-in-top': index === currentIndex }">{{ slide.description }}</p>
          <button :class="{ 'float-in-bottom': index === currentIndex }" class="btn-get-started">
            Get Started
          </button>
        </div>
      </div>
      <div class="carousel-control-prev" @click="prevSlide">
        <i class='bx bx-chevron-left'></i> 
      </div>
      <div class="carousel-control-next" @click="nextSlide">
        <i class='bx bx-chevron-right'></i>
      </div>
    </div>
  </div>
  <!-- Carousel Section End -->
</template>

<script>
export default {
  name: "CarouselComponent",
  data() {
    return {
      slides: [
        {
          image: require('@/assets/maize.jpg'),
          title: 'Welcome to Green',
          description: 'Lorem ipsum dolor sit amet...'
        },
        {
          image: require('@/assets/grape.jpg'),
          title: 'At vero eos et accusamus',
          description: 'Nam libero tempore...'
        },
        {
          image: require('@/assets/hydroponics.jpg'),
          title: 'Temporibus autem quibusdam',
          description: 'Beatae vitae dicta sunt explicabo...'
        }
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(this.nextSlide, 6000); // Set interval to 6 seconds
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>

<style scoped>
.hero {
  padding: 0;
}

.carousel {
  width: 100%;
  min-height: 70vh;
  position: relative;
  overflow: hidden;
}

.carousel-item {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1.5s ease-in-out; /* Smooth fade for images */
  z-index: 1;
}

.carousel-item.active {
  opacity: 1; /* Fade in active item */
  z-index: 2;
}

.carousel-item.fading {
  opacity: 0; /* Fade out non-active items */
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 128, 0, 0.5); /* Green overlay */
  z-index: 3; /* Above background but below content */
}

.carousel-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 4; /* Content on top of the overlay */
  color: white;
  text-align: center;
}

.carousel-content h2,
.carousel-content p,
.carousel-content .btn-get-started {
  margin-bottom: 20px;
  opacity: 0; /* Initially hidden for float-in effect */
  transition: opacity 1s ease;
}

.carousel-content h2 {
  font-size: 48px;
  font-weight: 700;
}

.carousel-content p {
  font-size: 18px;
}

.carousel-content .btn-get-started {
  color: white;
  background: rgba(0, 255, 0, 0.8);
  font-family: 'Arial', sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  padding: 10px 36px;
  border-radius: 50px;
  border: 2px solid white;
  transition: all 0.5s;
  margin: 10px;
}

.carousel-content .btn-get-started:hover {
  background: rgba(255, 255, 255, 0.8);
  color: #28a745;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 32px;
  opacity: 0.5;
  transition: opacity 0.3s;
  z-index: 5;
}

.carousel-control-prev {
  left: 10px;
}

.carousel-control-next {
  right: 10px;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  opacity: 0.9;
}

@keyframes floatInTop {
  from {
    opacity: 0;
    transform: translateY(-100px); /* Start from above */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Move to the center */
  }
}

@keyframes floatInBottom {
  from {
    opacity: 0;
    transform: translateY(100px); /* Start from below */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Move to the center */
  }
}

/* Apply animation for text floating in from the top */
.float-in-top {
  opacity: 1;
  animation: floatInTop 1.5s ease forwards;
}

/* Apply animation for button floating in from the bottom */
.float-in-bottom {
  opacity: 1;
  animation: floatInBottom 1.5s ease forwards;
}
</style>
