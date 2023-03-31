INSERT INTO account VALUES
('hiep', 'hiep', 'Hiệp', 'hiep@gmail.com', 1);

/* coffee_category */
INSERT INTO coffee_category VALUES
('CPC', 'Cà phê chai'),
('CPHT', 'Cà phê hòa tan'),
('CPRX', 'Cà phê rang xay'),
('CPHM', 'Cà phê hạt mộc'),
('VNCP', 'Viên nén cà phê');

INSERT INTO coffee_info VALUES
('LegendClassicH', 'CPHT', 'Trung Nguyên Legend Classic Hộp',
  pg_read_binary_file('/tmp/TrungNguyen_LegendClassic_Hop.png'),
  70000, E'Cảm hứng từ những Bản giao hưởng lừng danh của Thiên tài Âm nhạc người Đức – Ludwig Van Beethoven và ước muốn phụng sự Người đam mê cà phê trên toàn thế giới những Tách cà phê năng lượng tuyệt hảo, các chuyên gia của Tập đoàn cà phê số 1 – Trung Nguyên Legend đã tiên tác nên Tuyệt phẩm cà phê Legend Classic.\nNhững khi không có thời gian đến quán cà phê, bạn có thể tự pha cho mình ly cà phê Legend Classic để nạp năng lượng sáng tạo cho một ngày làm việc.')
