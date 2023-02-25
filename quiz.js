const easy = document.querySelector("#es");
const sel = $("#select");
const qu1 = document.querySelector("#q1");
const qu2 = document.querySelector("#qlist")
let answer = document.querySelectorAll(".ans");



easy.addEventListener("click", easyQuiz);

answer.forEach(answerr => { 
    answerr.addEventListener("click", (e)=> { 
        document.querySelector("h1").innerHTML = e.target.value;
    })
})

function easyQuiz() { 
    $(".diff").fadeOut(500);  
    sel.fadeOut(500);
    qu1.classList.remove("hdn");
    qu2.classList.remove("hdn");
    
}
