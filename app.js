let body = document.querySelector('.bodyClass')
let btn = document.querySelector('.colChange');
btn.addEventListener("click",()=>{
    console.log('Hello')
    body.classList.toggle('bodySecClass')
})