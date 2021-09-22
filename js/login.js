/* =======================
	* SCRIPT PAGINA LOGIN *
========================== */



    document.getElementById('user').focus()

    const redireccionar = (pagina) => {

        location.href = pagina
    }


    const formularioLogin = document.getElementById('formulario__login')

    formularioLogin.addEventListener("submit", (e) => {

        e.preventDefault()
        const usuario = 'admin'
        const contrasena = 'admin'

        const user = document.getElementById('user').value
        const password = document.getElementById('password').value

        if (user !== usuario || password !== contrasena) {
            let mensaje = 'Usuario o Contraseña erroneos. Introduzca valores nuevamente.'
            console.log(mensaje)
        } else {
            console.log('redireccion')
            let pagina = './editor.html'
            redireccionar(pagina)
        }
    })




