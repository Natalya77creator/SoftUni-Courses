function solve() {
  let shopCard = document.getElementsByClassName("shopping-cart")[0];
  let result = document.getElementsByTagName("textarea")[0];
  let product = [];
  let totalPrice = 0;
  let checkoutDone = false;
  shopCard.addEventListener("click", function (event) {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }
    if (checkoutDone) {
      return;
    }
    let bnt = event.target;
    if (Array.from(bnt.classList).indexOf("add-product") >= 0) {
      let product = event.target.parentElement.parentElement;
      let name = document.querySelectorAll(".product-title")[0].textContent;
      let price = document.querySelectorAll(".product-line-price")[0].textContent;
      result.textContent += `Added ${name} for ${price} to the cart.\n`;

      if (product.indexOf(name) < 0) {
        product.push(name);
      }
      totalPrice += Number(price);
     
    } else if (Array.from(bnt.classList).indexOf("checkout") >= 0){
      let list = product.join(', ');
      result.textContent += `You bought ${list} for ${totalPrice}.`
      checkoutDone = true
    }
  });
}
