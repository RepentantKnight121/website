// JavaScript library
const express = require("express");
const app = express();

const coffeeCategoryRouter = require("./coffee_category");
const CustomerInfoRouter = require("./customer_info");

app.use(express.json()); // req.body
app.use("/coffee-category", coffeeCategoryRouter);
app.use("/customer_info", coffeeCategoryRouter);

app.listen(5678, () => {
  console.log("server started at port 5678");
});
