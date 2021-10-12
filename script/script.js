const schemeSvg = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.price-total');
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