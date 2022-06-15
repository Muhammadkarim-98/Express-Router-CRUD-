const express = require("express");
const methodOverride = require("method-override");
const app = express();
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./routers/index");
const port = 1000;
//
app.set("view engine", "pug");
app.use(morgan("dev"));
//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
//
app.use("/instructor", router);
//
app.get("/", (req, res) => {
    res.redirect("/instructor");
});
//SERVER
app.listen(port, (req, res) => {
    console.log("Listening on port 1000");
});