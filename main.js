let divs = document.getElementsByTagName("div");
let button = document.getElementById("btn");

function change() {
    let isClicked = false;
    return function () {
        let newColor = (isClicked) ? 'black': 'yellow';

        for (let i = 0; i < divs.length; i++) {
            divs[i].style.color = newColor;
        }

        isClicked = !isClicked;
    }
}

let changeDivText = change();

button.addEventListener("click", changeDivText);