// nếu không chắc chắn kiểu dữ liệu thì chọn any.
// Hoặc xử lý code phức tạp chọn any để tránh lỗi biên dịch.

let any_type: any = "Hello, World!";
any_type = 42; // any type: 42
any_type = ["ten", 22, true] // any type: [ 'ten', 22, true ]

console.log("any type:", any_type);