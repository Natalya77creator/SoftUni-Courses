function solve() {
  const recipe = document.querySelector("#recipientName");
  const title = document.querySelector("#title");
  const mess = document.querySelector("#message");

  const bntadd = document.querySelector("#add");
  const btnCrest = document.querySelector("#reset");
  
  const listMail = document.querySelector("#list");
  const sendTex = document.querySelector("ul.sent-list");
  const deliteMail = document.querySelector("ul.delete-list");

bntadd.addEventListener("click", function (e) {
    e.preventDefault();
    const recipeText = recipe.value;
    recipe.value = "";
    const titleText = title.value;
    title.value = "";
    const messText = mess.value;
    mess.value = "";
    if (recipeText !== "" && titleText !== "" && messText !== "") {
      const liEl = document.createElement("li");
      const h4 = document.createElement("h4");
      h4.textContent = `Title: ${titleText}`;
      const h5 = document.createElement("h4")
      h5.textContent = `Recipient:${recipeText}`;
      const spanEl = document.createElement("span");
      spanEl.textContent = `${messText}`;
      let divEl = document.createElement("div");
      divEl.setAttribute('id', 'list-action');
      listMail.appendChild(liEl);
      liEl.appendChild(h4);
      liEl.appendChild(h5);
      liEl.appendChild(spanEl);
      liEl.appendChild(divEl);

      const btnSend = document.createElement("button");
      btnSend.setAttribute("type","submit");
      btnSend.setAttribute("id", "send");
      btnSend.textContent = "Send";
      divEl.appendChild(btnSend);
   
btnSend.addEventListener("click", function (e) {
        e.preventDefault();
        const liEll = document.createElement("li");
        sendTex.appendChild(liEll);
        let spanN = document.createElement("span");
        spanN.textContent = `To: ${recipeText} `;
        liEll.appendChild(spanN);
        let spanNN = document.createElement("span");
        spanNN.textContent = `Title: ${titleText}`;
        liEll.appendChild(spanNN);
        let divS = document.createElement("div");
        divS.classList.add("btn");
        liEll.appendChild(divS);
        const btnDel = document.createElement("button");
        btnDel.setAttribute("type","submit");
        btnDel.setAttribute("id", "delete");
        btnDel.textContent = "Delete";
        divS.appendChild(btnDel);
        e.target.parentNode.parentNode.remove()
btnDel.addEventListener("click", function (e) {
        e.preventDefault();
        const liEl = document.createElement("li");
        deliteMail.appendChild(liEl);
        let spanN = document.createElement("span");
        spanN.textContent = `To: ${recipeText} `;
        let spanNN = document.createElement("span")
        spanNN.textContent = `Title: ${titleText}`;
        liEl.appendChild(spanN)
        liEl.appendChild(spanNN)
        e.target.parentNode.parentNode.remove()
       
    })
      });
      btnCrest.addEventListener('click', function (e){
        e.preventDefault()
        recipe.value = "";
        title.value = "";
        mess.value = "";
    })
    const btnDel = document.createElement("button");
      btnDel.setAttribute("type","submit");
      btnDel.setAttribute("id", "delete");
      btnDel.textContent = "Delete";
      divEl.appendChild(btnDel);
    }
})
}
solve()
