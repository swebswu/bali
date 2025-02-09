const b = document.querySelector('button.btn-no')
b.addEventListener("mouseover", moveHover)

function moveHover(){
    const i=Math.floor(Math.random()*900)+100;
    const j=Math.floor(Math.random()*900)+100;

    b.style.left=i+"px"
    b.style.top=j+"px"
}