<template>
  <div class="weather-container">
    <h2 class="section-title">Weather Updates</h2>
    <div class="weather-content">
      <div class="weather-card">
        <i class="fas fa-cloud-sun weather-icon"></i>
        <h3>Current Weather</h3>
        <p class="weather-detail">Temperature: 28°C</p>
        <p class="weather-detail">Condition: Sunny</p>
      </div>
      <div class="forecast">
        <div class="forecast-card">
          <i class="fas fa-sun forecast-icon"></i>
          <p>Monday</p>
          <p>32°C / 25°C</p>
        </div>
        <div class="forecast-card">
          <i class="fas fa-cloud-showers-heavy forecast-icon"></i>
          <p>Tuesday</p>
          <p>29°C / 23°C</p>
        </div>
        <div class="forecast-card">
          <i class="fas fa-cloud-rain forecast-icon"></i>
          <p>Wednesday</p>
          <p>26°C / 21°C</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherUpdates",
};
</script>

<style scoped>
.weather-container {
  padding: 20px;
  background: linear-gradient(to right, #e0e5ec, #f0f4f8);
  border-radius: 20px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.section-title {
  font-size: 2em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

.weather-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.weather-card {
  background: #ecf0f1;
  border-radius: 15px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.7);
  padding: 20px;
  text-align: center;
  margin: 10px;
  flex: 1 1 300px;
  transition: all 0.3s ease;
}

.weather-card:hover {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.7);
}

.weather-icon {
  font-size: 3em;
  color: #2980b9;
}

.weather-detail {
  font-size: 1.3em;
  color: #34495e;
}

.forecast {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}

.forecast-card {
  background: #e0e5ec;
  border-radius: 15px;
  padding: 15px;
  width: 150px;
  text-align: center;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.forecast-card:hover {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.8);
}

.forecast-icon {
  font-size: 2em;
  color: #e67e22;
}

.forecast p {
  margin: 5px 0;
  color: #2c3e50;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .weather-content {
    flex-direction: column;
    align-items: center;
  }

  .forecast {
    flex-wrap: wrap;
  }

  .forecast-card {
    width: 120px;
    margin: 10px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5em;
  }

  .weather-card {
    flex: 1 1 250px;
    margin: 15px 0;
  }

  .forecast-card {
    width: 100px;
  }
}
</style>
