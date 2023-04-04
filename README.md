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

#### Coding guideline

Khi kết thúc 1 statement hãy thêm dấu ; vào

##### Statement

```js
// 1 statement
console.log("Xin chào");
```

##### Scope

Hãy thụt vô 2 space khi scope mới được thiết lập. Cũng như khi viết code cho
function, if else, hay loop hãy dùng bracket scope kiểu K&R style.

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

##### Đặt tên biến

Không nên đặt tên biến quá ngắn gọn

```js
a = 12;
n = "Anna";
c = "New York"
```

Thay vào đó hãy đặt tên biến rõ ràng hơn

```js
age = 12;
name = "Anna";
cityLive = "New York";
```

Vui lòng không đặt tên biến `CityLive` vì sẽ dễ bị nhầm lẫn với biến Object

##### Object và Class

Đặt tên biến theo

```js
JsonData = {
  "name": "Noob",
  "age": "15"
}

class You {
  // class code over here
}
```

#### Các câu lệnh git

#### Cơ bản

Thêm cách file vô hàng chờ

```sh
git add file1.js file2.js directory
```

Trong trường hợp bạn đã add code vô hàng chờ và bạn muốn xóa ra khỏi hàng chờ
nhưng bạn không muốn xóa file. Hãy dùng lệnh này

```sh
git reset file2.js directory2
```

Để xem cách file trong hàng chờ của thư mục

```sh
git ls-files
```

Để xóa các file ra khỏi backup của git

```sh
git rm --cache file2.js
```

Cam kết code và viết báo cáo commit. Vui lòng viết báo cáo bằng tiếng Việt có
dấu không cần phải phiên dịch lại số từ tiếng Anh của các files thêm, xóa sửa
chỉ cần viết báo cáo bạn đã làm những gì.

```sh
git commit
```

Trường hợp bạn cần xem lịch sử commit để quay lại có thể dùng 2 lệnh sau

```sh
git log
```

Ví dụ như mình muốn quay lại commit 4bu623 thì gõ

```sh
git revert 4bu623
```

Để đẩy code lên repo của bạn. Hãy dùng lệnh:

```sh
git push origin main
```

Để update code từ repo xuống local repo của bạn.

```sh
git pull
```

#### FAQ about git

Q: Lỡ thêm code nhưng chưa commit mà dùng lệnh git pull không được thì phải
làm sao?
A: Lệnh này sẽ làm tốt công việc của nó

```sh
git reset --hard HEAD
```
