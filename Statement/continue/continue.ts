let count = 0

while (count < 10) {
    count++;
    if (count < 4) {
        console.log("count =", count)
        continue;
    } else {
        console.log("vi count >= 4 nen ket thuc vong lap")
        break;
    }
}