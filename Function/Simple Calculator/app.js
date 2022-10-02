function calculator() {
    let selector1;
    let selector2;
    let resultSelector;
   let action =  {
    init : (firstSec, secondSec, resultSec) => {
        selector1 = document.querySelector(firstSec);
        selector2 = document.querySelector(secondSec);
        resultSelector = document.querySelector(resultSec);
        debugger
    },
    add : () => {
        let firstNum = Number(selector1.value);
        let secondNum = Number(selector2.value);
        let sum = firstNum + secondNum;
        resultSelector.value = sum
    },
    subtract: () => {
        let firstNum = Number(selector1.value);
        let secondNum = Number(selector2.value);
        let sum = firstNum - secondNum;
        resultSelector.value = sum
    }
   }
   return action
}
const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');




