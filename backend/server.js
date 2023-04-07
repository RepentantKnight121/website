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
const accountAdminRouter = require('./controllers/admin/account');
const billDetailAdminRouter = require('./controllers/admin/bill_detail');
const billInfoAdminRouter = require('./controllers/admin/bill_info');
const coffeeCategoryAdminRouter = require('./controllers/admin/coffee_category');
const coffeeStorageAdminRouter = require('./controllers/admin/coffee_storage');
const coffeeInfoAdminRouter = require('./controllers/admin/coffee_info');
const customerInfoAdminRouter = require('./controllers/admin/customer_info');
const discountAdminRouter = require('./controllers/admin/discount');

app.use(`${apiVersion}/admin/account`, accountAdminRouter);
app.use(`${apiVersion}/admin/bill-detail`, billDetailAdminRouter);
app.use(`${apiVersion}/admin/bill-info`, billInfoAdminRouter);
app.use(`${apiVersion}/admin/coffee-category`, coffeeCategoryAdminRouter);
app.use(`${apiVersion}/admin/coffee-storage`, coffeeStorageAdminRouter);
app.use(`${apiVersion}/admin/coffee-info`, coffeeInfoAdminRouter);
app.use(`${apiVersion}/admin/customer-info`, customerInfoAdminRouter);
app.use(`${apiVersion}/admin/discount`, discountAdminRouter);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
