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
const accountAdminRouter = require('./controllers/account');
const billDetailAdminRouter = require('./controllers/bill_detail');
const billInfoAdminRouter = require('./controllers/bill_info');
const coffeeCategoryAdminRouter = require('./controllers/coffee_category');
const coffeeStorageAdminRouter = require('./controllers/coffee_storage');
const coffeeInfoAdminRouter = require('./controllers/coffee_info');
const customerInfoAdminRouter = require('./controllers/customer_info');
const discountAdminRouter = require('./controllers/discount');

app.use(`${apiVersion}/account`, accountAdminRouter);
app.use(`${apiVersion}/bill-detail`, billDetailAdminRouter);
app.use(`${apiVersion}/bill-info`, billInfoAdminRouter);
app.use(`${apiVersion}/coffee-category`, coffeeCategoryAdminRouter);
app.use(`${apiVersion}/coffee-storage`, coffeeStorageAdminRouter);
app.use(`${apiVersion}/coffee-info`, coffeeInfoAdminRouter);
app.use(`${apiVersion}/customer-info`, customerInfoAdminRouter);
app.use(`${apiVersion}/discount`, discountAdminRouter);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
