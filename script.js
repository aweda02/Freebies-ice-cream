

const nav = document.querySelector('ul');
const menu = document.querySelector('.burger');
const back = document.querySelector('.back');

menu.addEventListener('click', ()=>{
    back.classList.toggle('activeBack'); 
    nav.classList.add('ulStyle');
    menu.style.display='none';
});
back.addEventListener('click', ()=>{
    back.classList.toggle('activeBack'); 
    nav.classList.remove('ulStyle');
    menu.style.display='block';
});


// 3d rotation
const tsCard = document.querySelectorAll('.testimonial-card');
const tsCardcont = document.querySelector('.testimonial-card-container');
tsCard.forEach( (item)=>{
item.addEventListener('mousemove',(e)=>{
rotateElement(e,item)
e.currentTarget.style.setProperty('--animate',  'animate 1s infinite')
})
 
})

function rotateElement(event,element ){
    const x =  event.clientX ;
    const y = event.clientY ;

    const mx = (window.innerWidth / 2)
    const my = (window.innerHeight / 2)

    const ox = ((x - mx ) / mx) * 45;
    const oy = ((y - my) / my) * 45;
 
element.style.setProperty('--rotateX', -1 * oy + 'deg')
element.style.setProperty('--rotateY', ox + 'deg')
 
    
}
//  swiper
  new Swiper('.card-swipper-wrapper', {
 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});