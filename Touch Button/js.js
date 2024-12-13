

const start=()=>{
    const wave = document.getElementById('wave-cont')
    const p = document.getElementById('paragraph')
    wave.style.display = 'block'
    p.innerText = 'داره دکمه را فشار میده'
  }
  
  const stop=()=>{
    const wave = document.getElementById('wave-cont')
    const p = document.getElementById('paragraph')
    wave.style.display = 'none'
    p.innerText = 'موس یا انگشت دکمه را فشار نمیده'
  }