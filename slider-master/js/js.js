let indexActiveSlider = 0;


const timeout = async (delay) => {
    return new Promise(res => setTimeout(res, delay));
}

var interval = setInterval(() => { handelChangeSlider('next') }, 5000);

 const handelStartChangeSlider = async (type) => {
    await handelChangeSlider(type)
    clearInterval(interval);
    interval = setInterval(() => { handelChangeSlider('next') }, 5000);
}



const handelChangeSlider = async (type) => {
    if (indexActiveSlider == 2 && type == 'next') {
        indexActiveSlider = 0
    }
    else if (indexActiveSlider == 0 && type == 'prev') {
        indexActiveSlider = 2
    }
    else {
        indexActiveSlider = type == 'next' ? ++indexActiveSlider : --indexActiveSlider;
    }
    handelChangeDescription()
    handelChangeTitle()
    let listImage = document.querySelectorAll(".sliderImage");
    [].forEach.call(listImage, function (el) {
        el.style.transform = 'scale(0)'
        el.classList.remove("visible");
        el.classList.remove("opacity-100");
        el.classList.add("invisible");
        el.classList.add("opacity-0");
        el.style.transitionDuration = '2000ms'

    });
    listImage[indexActiveSlider].style.transitionDuration = '800ms'
    listImage[indexActiveSlider].style.transform = 'scale(2)'
    await timeout(500)
    listImage[indexActiveSlider].classList.add("visible")
    listImage[indexActiveSlider].classList.add("opacity-100")
    listImage[indexActiveSlider].style.transform = 'scale(1)'
    listImage[indexActiveSlider].classList.remove("invisible")
    listImage[indexActiveSlider].classList.remove("opacity-0")
}




const handelChangeDescription = () => {
    let listDescription = document.querySelectorAll(".sliderDescription");
    [].forEach.call(listDescription, function (el) {
        el.classList.remove("bottom-2");
        el.classList.add("bottom-[-200px]");
    });
    listDescription[indexActiveSlider].classList.add("bottom-2")
    listDescription[indexActiveSlider].classList.remove("bottom-[-200px]")
}



const handelChangeTitle = async () => {
    let listTitle = document.querySelectorAll(".sliderTitle");
    [].forEach.call(listTitle, async function (el) {
        el.style.left = '1000px'
        let eleChild = el.getElementsByTagName("span");
        for(let i of eleChild){
            i.classList.remove('rotateChar')
        }
    });
    listTitle[indexActiveSlider].style.left = '0'
    let eleChild = listTitle[indexActiveSlider].getElementsByTagName("span");
    for(let i of eleChild){
        i.classList.add('rotateChar')
    }
}
