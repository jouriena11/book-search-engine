const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:0/googlebooks_DB');

module.exports = mongoose.connection;