document.addEventListener('mousemove' , (e)=>{
  let mouseX = e.clientX - 20 ;
  let mouseY = e.clientY - 20 ;

  let element = document.querySelector('.glow') ;

  element.style.left = mouseX + "px"
  element.style.top = mouseY + "px"
})