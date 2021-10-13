const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
let cost=800;
let totalPrice = 0;
schemeSvg.addEventListener('click',evt=>{
    if(!evt.target.classList.contains('booked')) {
        !evt.target.classList.contains('active')?totalPrice+=cost:totalPrice-=cost;
        evt.target.classList.toggle("active");        
    }
    
    totalPriceTag.textContent=totalPrice;
    console.log(totalPrice);
});

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('is-open');
});