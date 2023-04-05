INSERT INTO account VALUES
('hiep', 'hiep', 'Hiệp', 'hiep@gmail.com', 1),
('khoa', 'khoa', 'Khoa bảnh', 'khoa@gmail.com', 1);

INSERT INTO coffee_category VALUES
('CPC', 'Cà phê chai'),
('CPHT', 'Cà phê hòa tan'),
('CPRX', 'Cà phê rang xay'),
('CPHM', 'Cà phê hạt mộc'),
('VNCP', 'Viên nén cà phê');

INSERT INTO coffee_info VALUES
('LegendClassicH', 'CPHT', 'Trung Nguyên Legend Classic Hộp',
  pg_read_binary_file('/tmp/TrungNguyen_LegendClassic_Hop.png'),
  70000, E'Cảm hứng từ những Bản giao hưởng lừng danh của Thiên tài Âm nhạc người Đức – Ludwig Van Beethoven và ước muốn phụng sự Người đam mê cà phê trên toàn thế giới những Tách cà phê năng lượng tuyệt hảo, các chuyên gia của Tập đoàn cà phê số 1 – Trung Nguyên Legend đã tiên tác nên Tuyệt phẩm cà phê Legend Classic.\nNhững khi không có thời gian đến quán cà phê, bạn có thể tự pha cho mình ly cà phê Legend Classic để nạp năng lượng sáng tạo cho một ngày làm việc.'),
('LegendClassicB', 'CPHT', 'Trung Nguyên Legend Classic Bịch',
  pg_read_binary_file('/tmp/TrungNguyen_LegendClassic_Bich.png'),
  142000, E'Kết hợp những loại cà phê nguyên liệu tốt nhất thế giới cùng công nghệ Nano và những bí quyết huyền diệu của Phương Đông.'
);

INSERT INTO discount VALUES
('1', 'Sales hè', 0.01);

INSERT INTO customer_info VALUES
('1', 'hiep', 'Hiệp', '10237', 'hiepgay@gmail.com', '123 Hanoi'),
('2', 'khoa', 'Khoa', '10238', 'khoa@gmail.com', '123 Hanoi');

INSERT INTO bill_info VALUES
('1', '2', '1', NULL, NOW()),
('2', '2', '1', NULL, NOW());

INSERT INTO bill_detail VALUES
('1', '1', 'LegendClassicH', 2),
('2', '1', 'LegendClassicB', 1),
('3', '2', 'LegendClassicH', 1),
('4', '2', 'LegendClassicB', 2);