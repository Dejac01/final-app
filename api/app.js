require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Test = require("./models/test");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// --> This parses incoming requests with urlencoded payloads and is based on a middleware called body-parser.
app.use(methodOverride("_method"));
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
// -----> Instantiates Middleware to be executed during requestCycle.
mongoose.connect(
  "mongodb+srv://deja-user1:deja456@cluster0.ovscphh.mongodb.net/perscholas?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.set("strictQuery", true);
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(express.json());

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

Test.find({}, (err, allTest) => {
  if (err) {
    console.error(err);
  } else {
    console.log("allTest", allTest);
  }
});

Test.find({ greet: "hello world" }, (err, test) => {
  if (err) {
    console.error(err);
  } else {
    console.log("test", test);
  }
});

module.exports = app;
