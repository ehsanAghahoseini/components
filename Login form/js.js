const handelForm = (type) => {
    let btnLogin = document.getElementById('btnLogin')
    let btnRegister = document.getElementById('btnRegister')
    let coverRegister = document.getElementById('coverRegister')
    let coverLogin = document.getElementById('coverLogin')
    let registerForm = document.getElementById('registerForm')
    let loginForm = document.getElementById('loginForm')
    
    if (type == 'login') {
        btnLogin.classList.add('bg-blue-500')
        btnLogin.classList.add('text-white')
        btnRegister.classList.remove('bg-blue-500')
        btnRegister.classList.remove('text-white')

        coverLogin.classList.add('z-[1]')
        coverLogin.classList.add('top-0')
        coverLogin.classList.add('opacity-100')
        coverLogin.classList.remove('z-[-1]')
        coverLogin.classList.remove('top-[-20px]')
        coverLogin.classList.remove('opacity-0')

        coverRegister.classList.remove('z-[1]')
        coverRegister.classList.remove('top-0')
        coverRegister.classList.remove('opacity-100')
        coverRegister.classList.add('z-[-1]')
        coverRegister.classList.add('top-[-20px]')
        coverRegister.classList.add('opacity-0')

        loginForm.classList.add('flex')
        loginForm.classList.remove('hidden')
        registerForm.classList.add('hidden')
        registerForm.classList.remove('flex')
    }
    else {
        btnRegister.classList.add('bg-blue-500')
        btnLogin.classList.remove('text-white')
        btnLogin.classList.remove('bg-blue-500')
        btnRegister.classList.add('text-white')

        coverRegister.classList.add('z-[1]')
        coverRegister.classList.add('top-0')
        coverRegister.classList.add('opacity-100')
        coverRegister.classList.remove('z-[-1]')
        coverRegister.classList.remove('top-[-20px]')
        coverRegister.classList.remove('opacity-0')

        coverLogin.classList.remove('z-[1]')
        coverLogin.classList.remove('top-0')
        coverLogin.classList.remove('opacity-100')
        coverLogin.classList.add('z-[-1]')
        coverLogin.classList.add('top-[-20px]')
        coverLogin.classList.add('opacity-0')

        registerForm.classList.add('flex')
        registerForm.classList.remove('hidden')
        loginForm.classList.add('hidden')
        loginForm.classList.remove('flex')
    }
}