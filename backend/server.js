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
const coffeeStorageRouter = require('./controllers/coffee_storage');
const customerInfoRouter = require('./controllers/customer_info');
const discountRouter = require('./controllers/discount');

app.use(`${apiVersion}/account`, accountRouter);
app.use(`${apiVersion}/coffee-storage`, coffeeStorageRouter);
app.use(`${apiVersion}/customer-info`, customerInfoRouter);
app.use(`${apiVersion}/discount`, discountRouter);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
