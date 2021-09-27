let divQuestion = document.querySelectorAll(".question");

for (let divQ of divQuestion) {
    divQ.addEventListener("click", (e) => {
        let a = divQ.nextElementSibling;
        let arrow = divQ.children[0];
        divQ.classList.toggle("bold");
        a.classList.toggle("display-on");
        arrow.classList.toggle("rotate");
    })
}