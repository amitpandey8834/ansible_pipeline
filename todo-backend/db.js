const mongoose = require("mongoose");
const logger = require("./utils/logger");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        logger.info("MongoDB connected!"); // Log at info level for successful connection
    } catch (error) {
        logger.error("MongoDB connection failed", error); // Log at error level for failure
    }
};

module.exports = connectDB;
