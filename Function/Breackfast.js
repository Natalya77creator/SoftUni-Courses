function solution() {
    let obj = {
        protein: 0,
        carbohydrate: 0,
        flavour: 0,
        fat: 0,
        apple() {
            this.carbohydrate -= 1;
            this.flavour -= 2;
        },
        lemonade() {
            this.carbohydrate -= 10;
            this.flavour -= 20;
        },
        burger() {
            this.carbohydrate -= 5;
            this.fat -= 7
            this.flavour -= 3;
        },
        eggs() {
            this.protein -= 5
            this.fat -= 1;
            this.flavour -= 1;
        },
        turkey() {
            this.protein -= 10;
            this.carbohydrate -= 10;
            this.fat -= 10;
            this.flavour -= 10;
        },
        report() {
 
            return `protein=${this.protein} carbohydrate=${this.carbohydrate} fat=${this.fat} flavour=${this.flavour}`;
        }
 
 
    } //the closure is the obj
 
    return function make(str) {
 
        if (str.includes('restock')) {
            let [_, microelement, quantity] = str.split(' ');
            quantity = Number(quantity)
            obj[microelement] += quantity;
            return 'Success';
        } else if (str.includes('prepare')) {
            let [_, recipe, quantity] = str.split(' ');
            quantity = Number(quantity)
            for (let i = 0; i < quantity; i++) {
 
                obj[recipe]();
                let entries = Object.entries(obj);
                for (let [key, value] of entries) {
                        if (value < 0){
                            return `Error: not enough ${key} in stock`
                        };
                }
            }
            return 'Success';
 
        } else if (str.includes('report')) {
            let res = obj['report']();
            return res;
        }
    }
}
let manager = solution ();
console.log (manager ("restock flavour 50")); 
console.log (manager ("prepare lemonade 4"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
