const handelImage = (color) => {    
    let data = {
        'tomato': './1.png',
        'gray': './2.png',
        'blue': './3.png',
    }
    const img = document.getElementById('image')
    img.src = data[color]
}

