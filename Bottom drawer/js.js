const handelOpen = () => {
    const cover = document.getElementById('drawer-cover')
    const drawer = document.getElementById('drawer')
    cover.classList.add('drawer-cover-active')
    drawer.classList.add('drawer-active')
}


const handelClose = () => {
    const cover = document.getElementById('drawer-cover')
    const drawer = document.getElementById('drawer')
    cover.classList.remove('drawer-cover-active')
    drawer.classList.remove('drawer-active')
}
