let d = 0;
const dropdown = document.querySelector("#dropdown");
const list = document.querySelector("#drop");



dropdown.addEventListener("click", drop);


function drop(){ 
d++; 
if(d == 1){ 
    list.classList.replace("d-none", "d-block");
} else { 
    list.classList.replace("d-block", "d-none");
    d=0;
}
}
