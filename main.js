window.addEventListener('scroll', function() {
  var header=document.querySelector("nav")
  var sticky=document.querySelector(".sticky")
  
  header.classList.toggle('sticky', window.scrollY > 600)
})


$(document).ready(function(){
    $('.popup').magnificPopup({
      type:"iframe",
    })
  })
