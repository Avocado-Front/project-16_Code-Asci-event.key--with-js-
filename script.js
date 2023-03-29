let num = document.querySelector('.numh1')

let modal = document.querySelector('.modaldiv')

let p1 = document.querySelector('.p11');
let p2 = document.querySelector('.p22');
let p3 = document.querySelector('.p33');
let p4 = document.querySelector('.p44');

document.addEventListener('keydown',function(event){
    modal.classList.add('active')
    num.innerHTML = event.key
    p1.innerHTML = event.key
    p2.innerHTML = event.location
    p3.innerHTML = event.which
    p4.innerHTML = event.code
})
