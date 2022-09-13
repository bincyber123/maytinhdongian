let view = document.getElementById("view");

function inputvalue(valueButton){
    view.innerHTML += valueButton;
}

function result() {
    let result = eval(view.innerHTML);
    view.innerHTML = result;
}
function xoa() {
    view.innerHTML=""
}

