const mongoose = require('mongoose');

const DB_URI = "mongodb+srv://adrianmaturano:XTjyByDcAopyynVS@vocabulary.7h6xtoe.mongodb.net/?retryWrites=true&w=majority";


const connectDB = async () => {
    try {
      await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('DB: CONEXIÓN EXITOSA');
    } catch (err) {
      console.error(`DB: ERROR ${err}`);
    }
  };

  module.exports = connectDB;
