const inputTag = document.querySelector("input");
const btn = document.querySelector("button");
const mainpage = document.querySelector(".mainpage");
function addToDo() {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("id", "to-do-1");
    const label = document.createElement("label");
    label.setAttribute("for", "to-do-1");
    label.innerText = inputTag.value;
    input.append(label);
    mainpage.append(input);
    inputTag.value = "";
    // mainpage.classList.add("new-to-do");
    // mainpage.append(div);
}

btn.addEventListener("click", addToDo);