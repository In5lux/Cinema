const body = document.querySelector('body');
const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
const sits = document.querySelectorAll('path[data-title]');
const note = document.querySelector('.note');
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener('click',evt=>{
    if(!evt.target.classList.contains('booked')&&!evt.target.classList.contains('light')) {
        !evt.target.classList.contains('active')?totalPrice+=cost:totalPrice-=cost;
        evt.target.classList.toggle("active");                
    }
    
    totalPriceTag.textContent=totalPrice;    
});

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('is-open');
});

sits.forEach(elem=>elem.addEventListener('mouseover', evt=>{    
    note.style.display='inline-block';
    note.textContent=`${evt.target.dataset.title}`;
    note.style.top = `${evt.target.getBoundingClientRect().top+35}px`;
    note.style.left = `${evt.target.getBoundingClientRect().left}px`;    
    evt.target.addEventListener('mouseout', ()=>note.style.display='none');
}));
