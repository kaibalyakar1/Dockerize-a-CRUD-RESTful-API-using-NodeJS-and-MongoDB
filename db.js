const mongoose = require('mongoose');
const uri = "mongodb+srv://200301120011:TRFmp2SzD47Cxjiy@cluster0.euk3eru.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(uri); 
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;