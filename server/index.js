const express = require('express');
const mongoose = require('mongoose');
const Log = require('./models/LogSchema');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/kryptonite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.post('/', async (req, res) => {
  try {
    const { actionType, currency } = req.body;

    const logEntry = new Log({
      actionType,
      currency,
    });

    await logEntry.save();

    res.status(200).json({ message: 'Logged successfully' });
  } catch (error) {
    console.error('Error logging action:', error);
    res.status(500).json({ message: 'Error logging action' });
  }
});

app.listen(3001, () => {
  console.log('server is running');
});
