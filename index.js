 var Close = document.querySelector('.close-toggle');
 var Open = document.querySelector('.open-toggle');
 var link = document.querySelector('.nav-links');
  
 Open.addEventListener('click',()=>{
link.classList.add('open-toggle')
Close.classList.add('open-link');
Open.classList.add('close-link')
 })
 Close.addEventListener('click',()=>{
link.classList.remove('open-toggle')
Close.classList.remove('open-link');
Open.classList.remove('close-link')
 })