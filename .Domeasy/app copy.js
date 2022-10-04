function solve() {
  const recipe = document.querySelector("#recipientName");
  const title = document.querySelector("#title");
  const mess = document.querySelector("#message");

  const bntadd = document.querySelector("#add");
  const btnCrest = document.querySelector("#reset");
  
  const listMail = document.querySelector("#list");
  let sendTex = document.querySelector("ul.sent-list");
  let deliteMail = document.querySelector("ul.delete-list");
  debugger
  bntadd.addEventListener("click", function (e) {
    e.defaultPrevented();
    const recipeText = recipe.value;
    recipe.value = "";
    const titleText = title.value;
    title.value = "";
    const messText = mess.value;
    mess.value = "";
    if (recipeText !== "" && titleText !== "" && messText !== "") {
      const liEl = document.createElement("li");
      const h4 = document.createElement("h4");
      h4.textContent = titleText;
      h4.textContent = recipeText;
      const spanEl = document.createElement("span");
      spanEl.textContent = `Message:${messText}`;
      let divEl = document.createElement("div#list-action");
      listMail.appendChild(liEl);
      liEl.appendChild(h4);
      liEl.appendChild(h4);
      liEl.appendChild(spanEl);
      liEl.appendChild(divEl);
      const btnDel = document.createElement("button");
      btnDel.type.add("submit");
      btnDel.id.add("delete");
      btnDel.textContent = "Delete";
      divEl.appendChild(btnDel);

      const btnSend = document.createElement("button");
      btnSend.type.add("submit");
      btnSend.id.add("sent");
      btnSend.textContent = "Send";
      divEl.appendChild(btnSend);
btnSend.addEventListener("click", function (e) {
        e.preventDefault();
        const liEl = document.createElement("li");
        sendTex.appendChild(liEl);
        let spanN = document.createElement("span");
        spanN.textContent = recipeText;
        spanN.textContent = titleText;
        liEl.appendChild(spanN);
        liEl.appendChild(spanN);
        let divS = document.createElement("div");
        divEl.classList.add("btn");
        liEl.appendChild(divEl);
        const btnDel = document.createElement("button");
        btnDel.type.add("submit");
        btnDel.id.add("sent");
        btnDel.textContent = "Send";
        divEl.appendChild(btnSend);
        e.target.parentElement.remove();
btnDel.addEventListener("click", function (e) {
        e.preventDefault();
        const liEl = document.createElement("li");
        deliteMail.appendChild(liEl);
        let spanN = document.createElement("span");
        spanN.textContent = recipeText;
        spanN.textContent = titleText;
        e.target.parentElement.remove()
    })
      });
      btnCrest.addEventListener('click', function (e){
        recipe.value = "";
        title.value = "";
        mess.value = "";
    })
    }
})
}

