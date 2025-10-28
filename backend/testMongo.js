const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected successfully');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Connection failed:', err);
    process.exit();
  });
