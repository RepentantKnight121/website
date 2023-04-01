// Phiên bản api
const apiVersion = "/api/v1";

// JavaScript library
const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config();

const PORT = process.env.PORT;

// Các router sử dụng
const accountRouter = require("./model/account");
const billDetailRouter = require("./model/bill_detail");
const billInfoRouter = require("./model/bill_info");
const coffeeCategoryRouter = require("./model/coffee_category");
const coffeeStorageRouter = require("./model/coffee_storage");
const coffeeInfoRouter = require("./model/coffee_info");
const customerInfoRouter = require("./model/customer_info");
const discountRouter = require("./model/discount");

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
