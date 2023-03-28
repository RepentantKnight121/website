// JavaScript library
const express = require("express");
const app = express();

const coffeeCategoryRouter = require("./coffee_category");
const CustomerInfoRouter = require("./customer_info");
const accountRouter = require("./account");

app.use(express.json()); // req.body
app.use("/coffee-category", coffeeCategoryRouter);
app.use("/customer-info", CustomerInfoRouter);
app.use("/account", accountRouter);

app.listen(5678, () => {
  console.log("server started at port");
});
