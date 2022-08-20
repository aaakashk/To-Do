const text = document.querySelector("input");
const btn = document.querySelector("button");
const para = document.querySelector("p");
function getValue() {
    para.innerHTML = text.value;
}

btn.addEventListener("click", getValue);