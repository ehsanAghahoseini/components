const handelSelectImage = (value) => {
    let beforeSelect = document.getElementById('beforeSelect');
    let selected = document.getElementById('selected');
    let selectedImage = document.getElementById('selectedImage');
    beforeSelect.style.display = 'none'
    selected.style.display = 'flex'
    selectedImage.src = window.URL.createObjectURL(value.files[0])
}

const handelRemove = () => {
    let beforeSelect = document.getElementById('beforeSelect');
    let selected = document.getElementById('selected');
    beforeSelect.style.display = 'flex'
    selected.style.display = 'none'
}