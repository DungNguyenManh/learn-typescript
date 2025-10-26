const checkAge = (age: number): void => {
    if (age >= 18)
        console.log("Bạn có thể coi phim 18+")
    else if (age >= 13)
        console.log("Bạn chỉ có thể coi phim 13+")
    else
        console.log("Bạn chỉ có thể coi phim hoạt hình")
}

checkAge(5);