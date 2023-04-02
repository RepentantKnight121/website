// Phiên bản api
const apiVersion = "/api/";

// JavaScript library
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config();

const PORT = process.env.PORT;

// Các router sử dụng
const accountRouter = require("./access/account");
const billDetailRouter = require("./access/bill_detail");
const billInfoRouter = require("./access/bill_info");
const coffeeCategoryRouter = require("./access/coffee_category");
const coffeeStorageRouter = require("./access/coffee_storage");
const coffeeInfoRouter = require("./access/coffee_info");
const customerInfoRouter = require("./access/customer_info");
const discountRouter = require("./access/discount");

// Các thư viện được sử dụng trong app
app.use(express.json()); // req.body
app.use(cors());         // Để tương tác với React code bên frontend

app.use(`${apiVersion}/account`, accountRouter);
app.use(`${apiVersion}/bill-detail`, billDetailRouter);
app.use(`${apiVersion}/bill-info`, billInfoRouter);
app.use(`${apiVersion}/coffee-category`, coffeeCategoryRouter);
app.use(`${apiVersion}/coffee-info`, coffeeInfoRouter);
app.use(`${apiVersion}/customer-info`, customerInfoRouter);
app.use(`${apiVersion}/discount`, discountRouter);

app.listen(PORT, () => {
  console.log("server started at port 5678");
});
