// JavaScript library
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

// Các thư viện được sử dụng trong app
app.use(express.json()); // req.body
app.use(cors());         // Để tương tác với React code bên frontend
dotenv.config();

// Các biến toàn cục
const apiVersion = '/api';
const PORT = process.env.PORT;

// Các router sử dụng
const accountRouter = require('./controllers/account');
const billDetailRouter = require('./controllers/bill_detail');
const billInfoRouter = require('./controllers/bill_info');
//const coffeeCategoryRouter = require('./controllers/coffee_category');
const coffeeStorageRouter = require('./controllers/coffee_storage');
//const coffeeInfoRouter = require('./controllers/coffee_info');
const customerInfoRouter = require('./controllers/customer_info');
const discountRouter = require('./controllers/discount');

app.use(`${apiVersion}/account`, accountRouter);
app.use(`${apiVersion}/bill-detail`, billDetailRouter);
app.use(`${apiVersion}/bill-info`, billInfoRouter);
//app.use(`${apiVersion}/coffee-category`, coffeeCategoryRouter);
app.use(`${apiVersion}/coffee-storage`, coffeeStorageRouter);
//app.use(`${apiVersion}/coffee-info`, coffeeInfoRouter);
app.use(`${apiVersion}/customer-info`, customerInfoRouter);
app.use(`${apiVersion}/discount`, discountRouter);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
