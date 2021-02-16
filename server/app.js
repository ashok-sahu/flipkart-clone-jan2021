const path = require('path')
const express = require("express");
const helmet = require("helmet")
const cors = require('cors')
const app = express();

//all routes
const routes = require('./routes/routes')

//middlewares
app.enable("trust proxy");
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({extended:true,limit: '10kb'}))
app.use(cors())
app.use(helmet())

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use("/public", express.static(path.join(__dirname, "uploads")));

//routers
app.use(routes)

module.exports = app;
