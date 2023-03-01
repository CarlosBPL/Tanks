const easy = document.querySelector("#es");
const sel = $("#select");
const qu1 = document.querySelector("#q1");
const qu2 = document.querySelector("#qlist")
let answer = document.querySelectorAll(".ans");
const txt = document.querySelector("h1");
const submit = document.querySelector("#submit");

const quiz = [
    { 
        question: "test",
        ans1: "one",
        ans2: "two",
        ans3: "three",
},

]


submit.addEventListener("click", submitted);
easy.addEventListener("click", easyQuiz);

answer.forEach(answerr => { 
    answerr.addEventListener("click", (e)=> { 
        txt.innerHTML = e.target.value;
    })
})

function easyQuiz() { 
    $(".diff").fadeOut(500);  
    sel.fadeOut(500);
    qu1.classList.remove("hidden");
    qu2.classList.remove("hidden");
    qu1.classList.add("flex");
    qu2.classList.add("flex");
    
}
function submitted(){ 
    if(txt.innerHTML == "true"){ 
        console.log("bro got one poin");
    } else { 
        console.log("bruh");
    }
}
function a() { 
    let s = 1;
}