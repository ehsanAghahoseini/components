const handelCollapse=(index)=>{
    let ele = document.getElementsByClassName('item-cont')
    for(let i of ele){
        i.classList.remove('item-cont-active')
    }
    ele[index].classList.add('item-cont-active')
}