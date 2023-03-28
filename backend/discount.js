const express = require('express');
const router = express.Router();
const pool = require('./database/postgresql');


// Lấy danh sách tất cả các mã giảm giá
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM discount');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Lấy thông tin chi tiết của một mã giảm giá
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM discount WHERE discount_code_id=$1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Discount code not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Tạo mới một mã giảm giá
router.post('/', async (req, res) => {
  const { discount_code_id, event_name, discount_percent } = req.body;
  try {
    const result = await pool.query('INSERT INTO discount (discount_code_id, event_name, discount_percent) VALUES ($1, $2, $3) RETURNING *', [discount_code_id, event_name, discount_percent]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Cập nhật thông tin của một mã giảm giá
router.put('/:id', async (req, res) => {
  const { event_name, discount_percent } = req.body;
  try {
    const result = await pool.query('UPDATE discount SET event_name=$1, discount_percent=$2 WHERE discount_code_id=$3 RETURNING *', [event_name, discount_percent, req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Discount code not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
// Xóa một mã giảm giá
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  pool.query('DELETE FROM discount WHERE discount_code_id = $1', [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Discount deleted with ID: ${id}`);
  });
});
