function solve(year, month, date) {
    let patern = `${year}/${month}/${date}`;
    let newDate = new Date(patern);
    newDate.setDate(newDate.getDate()-1);
    console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`);
    
}
solve(2016, 9, 30)