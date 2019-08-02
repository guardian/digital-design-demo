//alert hello world
// alert('hello world');

//console log
console.log('Zef is awesome');

//get the element you want to do something with
document.querySelector('.header-title');

//save that element
var title = document.querySelector('.header-title');

//console log the element so you can see it in the browser
console.log(title);

//add a class to the element to make it do something
setTimeout(function(){
  title.classList.add('animate');
}, 2000);
