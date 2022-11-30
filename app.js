const express = require("express");
const app = express();
const dotenv = require("dotenv");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require('cors');
dotenv.config();


const url = process.env.MONGO
mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("MongoDB Connected"))
    .catch((err) => {
        console.log("Falied To Connect", err);
    });

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}))
app.use(express.json());


app.use("/api/todo/", require("./routes/TodoRoutes"));
app.listen(port, () => console.log("Server is Running at Port Number - ", port));
