const timeout = async (delay) => {
    return new Promise(res => setTimeout(res, delay));
}

let lastID = 2;

const handelMove = async (index, newLeft, newRight) => {
    let swimmer = document.getElementById('swimmer')
    let svgs = document.querySelectorAll(".item-svg");
    let texts = document.querySelectorAll(".item-text");
    if (lastID > index) {
        swimmer.style.left = await `${newLeft}%`
        await timeout(300)
        swimmer.style.right = await `${newRight}%`
    }
    else if (lastID < index) {
        swimmer.style.right = await `${newRight}%`
        await timeout(300)
        swimmer.style.left = await `${newLeft}%`
    }
    [].forEach.call(svgs, function (el) {
        el.classList.remove("item-svg-active");
    });
    [].forEach.call(texts, function (el) {
        el.classList.remove("item-text-active");
    });
    svgs[index].classList.add("item-svg-active")
    texts[index].classList.add("item-text-active")
    lastID = index;
}
