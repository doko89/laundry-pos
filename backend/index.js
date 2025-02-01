const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');
const workerRoutes = require('./routes/workerRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const orderRoutes = require('./routes/orderRoutes');
const bookkeepingRoutes = require('./routes/bookkeepingRoutes');

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/bookkeeping', bookkeepingRoutes);

app.get('/', (req, res) => {
  res.send('Laundry POS Backend');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});