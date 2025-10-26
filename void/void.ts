// void không trả về giá trị gì cả

const travegiatri = (a: number, b: number): number => {
    return a + b
}
console.log("Tra ve gia tri:", travegiatri(10, 20))



const khongtravegiatri = (message: string): void => {
    console.log("Khong tra ve gia tri:", message)
}
khongtravegiatri("Hello");