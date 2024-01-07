const handelChangeTab = (index) => {
    let btn = document.getElementsByClassName('container-head-btn')
    let text = document.getElementsByClassName('container-text')
    for(let i=0 ; i<=2 ; i++){
        btn[i].classList.remove('container-head-btn-active');
        text[i].classList.remove('container-text-active');
    }
    btn[index].classList.add('container-head-btn-active')
    text[index].classList.add('container-text-active')
}
