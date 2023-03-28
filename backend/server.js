// JavaScript library
const express = require("express");
const app = express();

const coffeeCategoryRouter = require("./coffee_category");
const CustomerInfoRouter = require("./customer_info");
const accountRouter = require("./account");
const billdetailRouter = require("./bill_detail");
const billinfoRouter = require("./bill_info");

app.use(express.json()); // req.body
app.use("/coffee-category", coffeeCategoryRouter);
app.use("/customer-info", CustomerInfoRouter);
app.use("/account", accountRouter);
app.use("/bill_detail", billdetailRouter);
app.use("/bill_info", billinfoRouter);

app.listen(5678, () => {
  console.log("server started at port");
});
