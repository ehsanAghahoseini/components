window.addEventListener('load', () => {
    for (let i of ['W', 'e', 'b', 'E', 'h', 's', 'a', 'n']) {
        console.log(i);
        let container = document.createElement("div")
        container.classList.add('char')
        let char_one = document.createElement("div")
        char_one.classList.add('char-one')
        char_one.textContent  = i ;
        container.appendChild(char_one)
        let char_two = document.createElement("div")
        char_two.classList.add('char-two')
        char_two.textContent  = i ;
        container.appendChild(char_two)
        document.body.appendChild(container)     
    }
})