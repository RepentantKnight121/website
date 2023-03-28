# website

Dự án website làm bởi sinh viên

## Các cộng tác viên

goatastronaut0212

Khoadz299

hiep200311

lxhoanq

### Chú ý dành cho các cộng tác viên

Vui lòng kiểm tra code repo của mình đã được update như code chính của chủ sở
hữu repo này hay chưa trước khi thực hiện bất cứ commit nào lên repo của mình.

#### Coding style

Khi kết thúc 1 statement hãy thêm dấu ; vào

```js
// 1 statement
console.log("Xin chào");
```

Hãy thụt vô 2 space khi scope mới được thiết lập. Cũng như khi viết code cho
function, if else, hay loop hãy dùng K&R style 

```js
function doThis(check) {
  if (check) {
    // statement
  } else {
    // statement
  }

  for (;;) {
    // statement
  }
}
```

#### Các câu lệnh git

Thêm cách file vô hàng chờ

```
git add file1.js file2.js directory
```

Trong trường hợp bạn đã add code vô hàng chờ và bạn muốn xóa ra khỏi hàng chờ.
Hãy dùng lệnh này

```
git reset file2.js directory2
```

Cam kết code và viết báo cáo commit. Vui lòng viết báo cáo bằng tiếng Việt có
dấu không cần phải phiên dịch lại số từ tiếng Anh của các files thêm, xóa sửa
chỉ cần viết báo cáo bạn đã làm những gì.

```
git commit
```

Để đẩy code lên repo của bạn. Hãy dùng lệnh:

```
git push origin main
```

