// Bài 1
// Bước 1: Xác định đầu vào:
//     + lương 1 ngày: rate: 100.000
//     + số ngày làm: days
//     + Tổng lương: total

// Bước 2: Các bước xử lí:
//     + Công thức tính lương: total = rate * days

// Bước 3: Kết quả:
//     + Tổng tiền lương total

var rate = 100000;
var days = 25;
var total;
total = rate * days;

console.log("Tổng tiền lương:", total, "VND");

// Bài 2:
// Bước 1: Xác định đầu vào:
//     + 5 số thực a1, a2, a3, a4, a5
//     + giá trị trung bình của 5 số a

// Bước 2: Các bước xử lí:
//     + Áp dụng công thức tính trung bình: a = (a1+a2+a3+a4+a5)/5

// Bước 3: Kết quả:
//     + Giá trị trung bình a

var a1 = 213;
var a2 = 25;
var a3 = 45;
var a4 = 123;
var a5 = 49;

var a;

a = (a1 + a2 + a3 + a4 + a5) / 5;

console.log("Giá trị trung bình a =", a);

// Bài 3: Quy đổi tiền

// Bước 1: Xác định đầu vào
//     + giá usd: usdRate = 23.500
//     + số tiền USD totalUsd
//     + sô tiền VND totalVnd
// Bước 2: Các bước xử lí
//     + Công thức chuyển tiền từ usd qua VND: totalVnd = usdRate*totalUsd

// Bước 3: Kết quả
//     + Tổng tiền VND sau khi quy đổi

var usdRate = 235000;
var totalUsd = 150;
var totalVnd;

totalVnd = usdRate * totalUsd;

console.log("Tổng tiền VND sau khi quy đổi:", totalVnd, "VND");

// Bài 4: Tính diện tích, chu vi hình chữ nhật
// Bước 1: Xác định đầu vào:
//     + Chiều dài của HCN: chieuDai
//     + Chiều rộng của HCN: chieuRong
//     + chu vi HCN: chuVi
//     + diện tích HCN: dienTich
// Bước 2: Các bước xử lí:
//     + chu vi HCN = (chieuDai+chieuRong)*2
//     + diện tích HCN = (chieuDai*chieuRong)
// Bước 3: Kết quả:
//     + chu vi HCN
//     + diện tích HCN

var chieuDai = 15;
var chieuRong = 12;
var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;

console.log("Chu vi của hình chữ nhật là", chuVi);
console.log("Diện tích của hình chữ nhật là", dienTich);

// Bài 5: Tính tổng 2 kí số
// Bước 1: Xác định đầu vào:
//     + Số có 2 chữ số n
//     + kí số hàng chục: hangchuc
//     + kí số hàn đơn vị: donVi
//     + tổng 2 kí số:  Sum

// Bước 2: Các bước xử lí:
//     + hangChuc = Math.floor(n/10);
//     + donVi = n%10;
//     + Sum = hangChuc + donVi

// Bước 3: Kết quả
//     + Tổng 2 chữ số của số n Sum

var n = 45;
var hangChuc = Math.floor(n / 10);
var donVi = n % 10;
var sum;
sum = hangChuc + donVi;

console.log("Tổng 2 ký số là:", sum);
