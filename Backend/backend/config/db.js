
const mongoose = require('mongoose');

const connectDB = async () => {

    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (e) => {
        console.log(e ? e : "Connected successfully to database");
    });
    /*try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta);

    } catch (error) {
        console.log(`Mongodb Database Error ${error}`.bgRed.white);
    }*/

};

module.exports = connectDB;


