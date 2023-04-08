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
('SuaSuccess', 'CPC', 'Cà Phê Sữa Success – 100ml',
  pg_read_binary_file('/tmp/SuaSuccess.jpg'),
  29000, E'Hướng dẫn sử dụng:\nLắc đều trước khi đổ ra ly\nNên dùng với đá lạnh\nBảo quản lạnh để giữ được hương vị\nDùng ngon nhất trong 24 giờ kể từ khi mở nắp\n\nCách thức bảo quản: Nhiệt độ bảo quản 0-4°C, vì vậy khuyến khích khách hàng sau khi mở nắp chai sử dụng có thể cho vào ngăn mát tủ lạnh và tiếp tục sử dụng để đảm bảo chất lượng ngon nhất.\n\nHạn sử dụng: 6 ngày kể từ NSX và 24 tiếng sau khi mở nắp chai'
),
('LegendClasH', 'CPHT', 'Trung Nguyên Legend Classic Hộp',
  pg_read_binary_file('/tmp/TrungNguyen_LegendClassic_Hop.png'),
  70000, E'Cảm hứng từ những Bản giao hưởng lừng danh của Thiên tài Âm nhạc người Đức – Ludwig Van Beethoven và ước muốn phụng sự Người đam mê cà phê trên toàn thế giới những Tách cà phê năng lượng tuyệt hảo, các chuyên gia của Tập đoàn cà phê số 1 – Trung Nguyên Legend đã tiên tác nên Tuyệt phẩm cà phê Legend Classic.\nNhững khi không có thời gian đến quán cà phê, bạn có thể tự pha cho mình ly cà phê Legend Classic để nạp năng lượng sáng tạo cho một ngày làm việc.'
),
('LegendClasB', 'CPHT', 'Trung Nguyên Legend Classic Bịch',
  pg_read_binary_file('/tmp/TrungNguyen_LegendClassic_Bich.png'),
  142000, E'Kết hợp những loại cà phê nguyên liệu tốt nhất thế giới cùng công nghệ Nano và những bí quyết huyền diệu của Phương Đông.'
),
('G7HoaTanDen', 'CPHT', 'Cà Phê G7 Hòa Tan Đen',
  pg_read_binary_file('/tmp/CaPheG7HoaTanDen.jpg'),
  27000, E'Là dòng sản phẩm cà phê hòa tan đen thuần túy không đường, có chất lượng và hương vị đậm đà thơm ngon đúng gu thưởng thức cửa những người sành cà phê.\nQuy cách: 15 gói/1 gói 2g'
),
('G72in1', 'CPHT', 'G7 2in1 hộp 15 sachets',
  pg_read_binary_file('/tmp/CaPheG72in1.jpg'),
  53000, E'G7 2 in 1 là sản phẩm cà phê hòa tan mang hương vị đặc trưng thuần túy của cà phê đen đá thứ thiệt, đúng gu hương vị của cà phê rang xay Trung Nguyên.'
),
('G7GuManh', 'CPHT', 'Cà phê hòa tan G7 Gu Mạnh X2',
  pg_read_binary_file('/tmp/CaPheG7GuManh.jpg'),
  54500, E'G7 gu mạnh X2 là dòng sản phẩm cà phê hòa tan có hương vị có hương vị cà phê đậm đặc gấp đôi cho những người có gu cà phê mạnh thứ thiệt, mang đến cho bạn một ly cà phê đậm đà đúng gu với chất cà phê mạnh mẽ.\nQuy cách đóng gói: 12 gói x 1 gói 25gr'
),
('G73in1Hop18', 'CPHT', 'Cà Phê G7 3in1 – Hộp 18 Sticks',
  pg_read_binary_file('/tmp/CaPheG73in1_Hop_18.jpg'),
  55500, E'Cà phê G7 3in1 được chiết xuất từ những phần tinh túy nhất có trong từng hạt cà phê, trên công nghệ hàng đầu và bí quyết không thể sao chép để cho ra đời sản phẩm cà phê hòa tan thượng hạng, với hương vị khác biệt, đậm đà, hương thơm độc đáo quyến rũ mà không một sản phẩm cà phê hòa tan nào khác đạt được. Trong suốt 12 năm liên tục cà phê G7 được người tiêu dùng bình chọn là hàng Việt Nam chất lượng cao.\nG7 là sản phẩm cà phê hòa tan duy nhất được chọn phục vụ các nguyên thủ quốc gia tại APEC, ASEM 5.'
),
('G73in1Hop21', 'CPHT', 'Cà Phê G7 3in1 – Hộp 21 Sticks',
  pg_read_binary_file('/tmp/CaPheG73in1_Hop_21.jpg'),
  61000, E'Cà phê G7 3in1 được chiết xuất từ những phần tinh túy nhất có trong từng hạt cà phê, trên công nghệ hàng đầu và bí quyết không thể sao chép để cho ra đời sản phẩm cà phê hòa tan thượng hạng, với hương vị khác biệt, đậm đà, hương thơm độc đáo quyến rũ mà không một sản phẩm cà phê hòa tan nào khác đạt được.\nCà phê G7 3in1 được 89% người tiêu dùng bình chọn là sản phẩm yêu thích hơn các loại cà phê hòa tan khác tại sự kiện thử mùi trực tiếp năm 2003.\nG7 là sản phẩm cà phê hòa tan duy nhất được chọn phục vụ các nguyên thủ quốc gia tại APEC, ASEM 5.'
),
('G73in1Bich50', 'CPHT', ' Cà Phê G7 3in1 – Bịch 50 Sachets',
  pg_read_binary_file('/tmp/CaPheG73in1_Bich_50.jpg'),
  138000, E'Cà phê G7 3in1 được chiết xuất từ những phần tinh túy nhất có trong từng hạt cà phê, trên công nghệ hàng đầu và bí quyết không thể sao chép để cho ra đời sản phẩm cà phê hòa tan thượng hạng, với hương vị khác biệt, đậm đà, hương thơm độc đáo quyến rũ mà không một sản phẩm cà phê hòa tan nào khác đạt được. Trong suốt 12 năm liên tục cà phê G7 được người tiêu dùng bình chọn là hàng Việt Nam chất lượng cao.\nG7 là sản phẩm cà phê hòa tan duy nhất được chọn phục vụ các nguyên thủ quốc gia tại APEC, ASEM 5.'
),
('LegendSE9', 'CPHT', 'Legend Special Edition 9 Sticks',
  pg_read_binary_file('/tmp/LegendSE9.jpg'),
  53000, E'Cảm hứng từ những bản giao hưởng lừng danh của thiên tài âm nhạc người Đức – Ludwig Van Beethoven và ước muốn phụng sự người đam mê cà phê trên toàn thế giới những tách cà phê năng lượng tuyệt hảo, các chuyên gia của Tập đoàn cà phê số 1 – Trung Nguyên Legend đã tạo nên tuyệt phẩm cà phê Legend Special Edition.\nNhững khi không có thời gian đến quán cà phê, bạn có thể tự pha cho mình ly cà phê Legend Special Edition để nạp năng lượng sáng tạo cho một ngày làm việc.\nTrọng lượng: 225gr Hộp 9 Stick.'
),
('LegendCapHaz12', 'CPHT', 'Legend Cappuccino Hazelnut – 12 Sticks',
  pg_read_binary_file('/tmp/LegendCapHaz12.jpg'),
  61500, E'Legend Cappu Hazelnut là sự kết hợp giữa mùi vị hạt dẻ ấm nồng và những hạt cà phê chất lượng nhất. Lần đầu tiên tại Việt Nam, duy nhất chỉ có ở Trung Nguyên Legend đã tạo ra sản phẩm cà phê hòa tan phong cách Ý. Legend Cappu Hazelnut sẽ giúp tiết kiệm thời gian trong cuộc sống bận rộn.\nVới loại hộp 12 gói nhỏ rất tiện dụng, có thể mang tới văn phòng để sử dụng hàng ngày hoặc mang theo trong các chuyến đi xa.\nKhối lượng: Hộp 12 sticks x 18gr'
),
('LegendCapMoc12', 'CPHT', 'Legend Cappuccino Mocha 12 sticks',
  pg_read_binary_file('/tmp/LegendCapMoc12.jpg'),
  61500, E'Cà phê Legend Cappuccino Mocha giúp những người yêu thích cà phê không cần đến quán vẫn có thể thưởng thức một ly cà phê thơm ngon, nhẹ nhàng, tinh tế với mùi thơm của cà phê, vị hấp dẫn của sữa và ngọt ngào của kem, kết hợp với lớp bọt quyến rũ trên bề mặt mang nét đặc trưng của cà phê Ý.\nĐặc điểm: Cà phê hòa tan Cappuccino Mocha mang phong cách Ý với hương thơm tinh tế, mùi vị hấp dẫn rất đặc trưng.\nKhối lượng: Hộp 12 sticks x 18gr.'
),
('LegendPassiona14', 'CPHT', ' Legend Passiona – 14 Sticks',
  pg_read_binary_file('/tmp/LegendPassiona14.jpg'),
  57000, E'Tuyệt phẩm Legend Passiona được sáng tạo nên từ những hạt cà phê Robusta thơm ngon nhất dành riêng cho phái đẹp, đặc biệt bổ sung hàm lượng Collagen giúp da sáng đẹp tự nhiên và tràn đầy năng lượng sáng tạo để sống trọn với đam mê và thành công trong cuộc sống.\nThành phần:Cà phê, sữa, đường, collgen.\nĐặc điểm:Hàm lượng caffein thấp, bổ sung collagen cho da và sắc đẹp của phụ nữ.\nKhối lượng: Hộp 14 gói x 16gr.'
),
('LegendCapCoco12', 'CPHT', 'Legend Cappuccino Coconut – 12 Sticks',
  pg_read_binary_file('/tmp/LegendCapCoco12.jpg'),
  61500, E'Trung Nguyên Legend Cappuccino Coconut được sáng tạo nên từ sự kết hợp độc đáo giữa hương vị cà phê Robusta đậm đà, quyến rũ, tuyệt ngon cùng với mùi vị dừa, một nguồn nguyên liệu lành và thực dưỡng, khơi dậy nguồn năng lượng sáng tạo và tỉnh thức mạnh mẽ giúp bạn làm việc tràn đầy nhiệt huyết tại nhà hoặc bất cứ nơi đâu!\nCùng với hương vị Coconut, các sản phẩm Trung Nguyên Legend Cappuccino hương vị Mocha và Hazelnut sẽ mang đến cho bạn những trải nghiệm thú vị, khác biệt, đặc biệt của hệ sản phẩm Trung Nguyên Legend mang phong cách cà phê Ý, là đại diện của văn minh cà phê Roman tiêu biểu thế giới.\nQuy cách:Hộp 12 sticks x 18gr.'
),
('LegendClas12', 'CPHT', 'Legend Classic – 12 Sticks',
  pg_read_binary_file('/tmp/LegendClas12.jpg'),
  41000, E'Cảm hứng từ những Bản giao hưởng lừng danh của Thiên tài Âm nhạc người Đức – Ludwig Van Beethoven và ước muốn phụng sự Người đam mê cà phê trên toàn thế giới những Tách cà phê năng lượng tuyệt hảo, các chuyên gia của Tập đoàn cà phê số 1 – Trung Nguyên Legend đã tiên tác nên Tuyệt phẩm cà phê Legend Classic. Kết hợp những loại cà phê nguyên liệu tốt nhất thế giới cùng công nghệ Nano và những bí quyết huyền diệu của Phương Đông.\nNhững khi không có thời gian đến quán cà phê, bạn có thể tự pha cho mình ly cà phê Legend Classic để nạp năng lượng sáng tạo cho một ngày làm việc.\nTrọng lượng: 204gr Hộp: 12 gói
'),
('VNCPRXOttoman', 'VNCP', 'Viên nén cà phê rang xay Ottoman',
  pg_read_binary_file('/tmp/VNCPRXOttoman.png'),
  142000, E'Hộp 10 viên.'
)
;

INSERT INTO coffee_storage VALUES
('SuaSuccess', 1000),
('LegendClasH', 1000),
('LegendClas12', 1000),
('VNCPRXOttoman', 1000);

INSERT INTO discount VALUES
('1', 'Sales hè', 0.01);

INSERT INTO customer_info VALUES
('1', 'hiep', 'Hiệp', '10237', 'hiepgay@gmail.com', '123 Hanoi'),
('2', 'khoa', 'Khoa', '10238', 'khoa@gmail.com', '123 Hanoi');

INSERT INTO bill_info VALUES
('1', '2', '1', NULL, NOW()),
('2', '2', '1', NULL, NOW());

INSERT INTO bill_detail VALUES
('1', '1', 'LegendClasH', 2),
('2', '1', 'LegendClasB', 1),
('3', '2', 'LegendClasH', 1),
('4', '2', 'LegendClasB', 2);