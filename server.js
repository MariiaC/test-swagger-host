const mongoose = require('mongoose')
const app = require ('./app.js');

const PORT = process.env.PORT || 4000;
const DB_HOST = process.env.uriDb;

mongoose.set('strictQuery', false);

mongoose
    .connect(DB_HOST)
    .then(() => {
        console.log('📥 Database connection successful');
        app.listen(PORT, () => {
            console.log(`⏳ Server running. Use our API on port: ${PORT}`);
        });
    })
    .catch(err => {
        console.log(`Server not running. Error message: ${err.message}`);
        process.exit(1);
    });
