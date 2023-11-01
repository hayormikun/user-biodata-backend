require("dotenv").config();
const http = require("http");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const generalRoutes = require("./routes/generalRoutes");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

mongoose
  .connect(process.env.DB_URI, {
    useNewurlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    server.listen(port, "0.0.0.0" () => {
      console.log("DB connected");
    });
  })
  .catch((err) => {
    console.error(err);
  });


//General routes
app.use(generalRoutes);


app.use("*", (req, res) => {
  res.status("400");
  res.end("error");
});
//-----------------------------------------

const server = http.createServer(app);

