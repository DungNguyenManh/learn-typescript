//Cú pháp ...so: number[] là rest parameter — nó gom tất cả tham số truyền vào thành một mảng so.

function tinhTong(...so: number[]) {
    console.log("Các số nhận được:", so);
    const tong = so.reduce((a, b) => a + b, 0);
    console.log("Tổng =", tong);
}

tinhTong(1, 2, 3);       // Các số nhận được: [1, 2, 3] → Tổng = 6
tinhTong(5, 10, 15, 20); // Các số nhận được: [5, 10, 15, 20] → Tổng = 50
