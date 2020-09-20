require("dotenv").config();

export default {
  MONGODB_URL: process.env.ATLAS_URI || "mongodb://localhost/makeci",
  JWT_SECRET: process.env.JWT_SECRET || 'RANDOM_STRING'
};
