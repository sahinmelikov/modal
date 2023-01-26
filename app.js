let btns=document.querySelector('.btns');
let icon=document.querySelector('.bi');
let pe=document.querySelector('p');
let close=document.querySelector('.close')


 btns.addEventListener("click",function(){
    this.nextElementSibling.classList.remove('d-none')
 btns.addEventListener("click",function(){
     this.nextElementSibling.classList.add('d-none')   
 })
 });
icon.addEventListener("click",function(){
this.parentElement.classList.add('d-none')
});
close.addEventListener("click",function(){
this.parentElement.classList.add('d-none')
})


