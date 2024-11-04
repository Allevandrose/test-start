<template>
  <div class="medical-container">
    <h2 class="section-title">Medical Updates</h2>
    <div class="medical-content">
      <div class="medical-card">
        <i class="fas fa-notes-medical medical-icon"></i>
        <h3>Health Tip</h3>
        <p>Stay hydrated and maintain a balanced diet to boost your immunity.</p>
      </div>
      <div class="updates">
        <div class="update-card">
          <i class="fas fa-stethoscope update-icon"></i>
          <h4>Recent Checkups</h4>
          <p>Get regular checkups to detect early signs of illness.</p>
        </div>
        <div class="update-card">
          <i class="fas fa-pills update-icon"></i>
          <h4>Medication Reminders</h4>
          <p>Set reminders to take your medication on time every day.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MedicalUpdates",
};
</script>

<style scoped>
.medical-container {
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

.medical-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.medical-card {
  background: #ecf0f1;
  border-radius: 15px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.15), -8px -8px 16px rgba(255, 255, 255, 0.7);
  padding: 20px;
  text-align: center;
  margin: 10px;
  flex: 1 1 300px;
  transition: all 0.3s ease;
}

.medical-card:hover {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.7);
}

.medical-icon {
  font-size: 3em;
  color: #27ae60;
}

.updates {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}

.update-card {
  background: #e0e5ec;
  border-radius: 15px;
  padding: 15px;
  width: 150px;
  text-align: center;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.update-card:hover {
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2), -4px -4px 8px rgba(255, 255, 255, 0.8);
}

.update-icon {
  font-size: 2em;
  color: #3498db;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .medical-content {
    flex-direction: column;
    align-items: center;
  }

  .updates {
    flex-wrap: wrap;
  }

  .update-card {
    width: 120px;
    margin: 10px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.5em;
  }

  .medical-card {
    flex: 1 1 250px;
    margin: 15px 0;
  }

  .update-card {
    width: 100px;
  }
}
</style>
