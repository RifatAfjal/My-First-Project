  var a = document.querySelector('.icon');
  var b = document.querySelector('.icon span:nth-child(1)');
  var c = document.querySelector('.icon span:nth-child(2)');
  var d = document.querySelector('.icon span:nth-child(3)');

  a.addEventListener('click',hideShow); // for toggle menu

 function hideShow(){
   document.querySelector('ul').classList.toggle('show');
   b.classList.toggle('toggle1'); // for making a crossBar
   c.classList.toggle('toggle2'); // for invisible 
   d.classList.toggle('toggle3'); // for making a crossBar
 }

