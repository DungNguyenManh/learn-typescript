for (const test = 0; test < 10; test++) { // Lỗi test vì const là khai báo giá trị 
    console.log("test =", test) // và giữ nguyên không đổi, nên dùng let thay thế
}
//-------------------------------------------
for (let i = 0; i < 10; i++) {
    console.log("i =", i)
}