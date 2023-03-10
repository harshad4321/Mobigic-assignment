const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()

const DB_URL = 'mongodb+srv://harshad4321:gCI4bOaBBIiFkDwZ@cluster0.3xlvbz2.mongodb.net/mobigic?retryWrites=true&w=majority'

// const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);

module.exports = mongoose;