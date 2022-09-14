function solve(year, month, day) {
    let currentDate = new Date(year, month-1, day);
    currentDate.setDate(currentDate.getDate() - 1);
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`);
    
}
solve(2016, 9, 30)