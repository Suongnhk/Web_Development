const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require("morgan");
const cors = require("cors");
const { globalErrHandler } = require("./utils/globalErrHandler");
const apiError = require("./utils/apiError");
require("dotenv").config();

// Config
const db = require("./config/db_config");
const passport = require("./config/passport_config");

// Connect to DB
db.connect();

// adding
  // const { MongoClient, ObjectId } = require('mongodb');
  // client = new MongoClient("mongodb://127.0.0.1:27017");
  // client.connect();
  // database = client.db("Fit&Fresh");
  // userCollection = db.collection("job");
// end adding

// Routes
const authRoute = require("./routes/auth");
const reviewRoute = require("./routes/review");
const searchRoute = require("./routes/liveSearch");
const productRoute = require("./routes/product");
const couponRoute = require("./routes/coupon");
const addressRoute = require("./routes/address");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const blogRoute = require("./routes/blog");
// Middleware
const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false },{limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("combined"));
app.use(express.json());

// Use routes

app.use("/api/auth", authRoute);
app.use("/api/review", reviewRoute);
app.use("/api/search", searchRoute);
app.use("/api/products", productRoute);
app.use("/api/coupons", couponRoute);
app.use("/api/address", addressRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/blogs", blogRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});


// Handle route error
app.all("*", (req, res, next) => {
  const err = new apiError(`Can't find this route ${req.originalUrl}`, 400);
  next(err);
});

// Global Error Handlers Middleware
app.use(globalErrHandler);

// Listen To Server
const PORT = process.env.PORT || 5000; //default port is 5000
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
