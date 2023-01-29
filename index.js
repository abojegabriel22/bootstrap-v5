
function copyText(htmlElement) {
    if(!htmlElement){
        return;
    }

    let elementText = htmlElement.innerText;
    let inputElement = document.createElement("input");
    inputElement.setAttribute("value", elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand("copy");
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector("#copy-text-btn").onclick = function(){
    copyText(document.querySelector("#text"));
}

//show a popup modal window
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}