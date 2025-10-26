const switch_case = (a: number) => {
    switch (a) {
        case 1:
            console.log("a = 1")
            break;
        case 2:
            console.log("a = 2")
            break;
        case 3:
        case 4:
            console.log("a = 3 hoac a = 4")
            break;
        default:
            console.log("a khong phai 1, 2, 3, 4")
    }
}

switch_case(5)