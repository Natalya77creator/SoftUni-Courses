function solve1() {
    const text = document.getElementById("text").value;
    const conversion = document.getElementById("naming-convention").value;
  
    const splitted = text.split(" ");
    let res = ''
    switch (conversion) {
        case 'Camel Case':
            splitted.forEach(e,i => {
                if (i === 0) {
                    return res += e.toLowerCase();
                }
                return res += e[0].toUpperCase() + e.substring(1).toLowerCase();
            });
            break;
        case 'Pascal Case':
            splitted.forEach(e,i => {
           return res += e.toLowerCase();
        });
           break;
        default: res = 'Error'
            break;
    }
    document.getElementById('result').textContent = res;
}