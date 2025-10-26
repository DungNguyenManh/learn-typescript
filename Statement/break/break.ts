let products = [
    { number: 0, name: "Iphone 14 Pro", price: 30000000 },
    { number: 1, name: "Iphone 16 Pro", price: 25000000 },
    { number: 2, name: "Iphone 17 Pro", price: 15000000 },
    { number: 3, name: "Iphone 15 Pro", price: 30000000 },
    { number: 4, name: "Iphone 18 Pro", price: 25000000 },
    { number: 5, name: "Iphone 19 Pro", price: 15000000 }
]

for (let i = 0; i < products.length; i++) {

    console.log(products[i])
    if (i === 3)
        break;
}