const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const consRoutes = require('./routes/consumerRoutes');
const farmRoutes = require('./routes/farmerRoutes');



dotenv.config();



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/consumer', consRoutes);
app.use('/api/farmer', farmRoutes);

app.use((req, res, next) => {
  next(httpErrors(404, 'Not Found'));
});

// app.use((err, req, res, next) => {
//   res.status(err.status || 500).json({ message: err.message });
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    // await sequelize.authenticate();
    console.log('Database connected...');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
