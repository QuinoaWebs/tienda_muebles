


        /* ====================
	* MENU RESPONSIVE *
==================== */
(() => {
    
    

        const iconMenu = document.getElementById('icon-menu');
        const mainMenu = document.getElementById('main-menu');




        iconMenu.addEventListener('click', (e) => {

            e.preventDefault()
            mainMenu.classList.toggle('menu--show');
        });

    })();




    
 if(window.location.pathname === '/index.html'){





    /*=================Javascript para cambiar de idioma==================*/

    (() => {

        let banderaEspana = document.querySelector('#banderaEspana');
        let banderaInglaterra = document.querySelector('#banderaInglaterra');
        let banderaFrancia = document.querySelector('#banderaFrancia');

        banderaEspana.addEventListener('click', function() {

            window.location.href = './index.html';

        });


        banderaInglaterra.addEventListener('click', function() {

            window.location.href = './ingles/index.html';

        });


        banderaFrancia.addEventListener('click', function() {

            window.location.href = './frances/index.html';

        });

    })();



 }  







/* ====================
	* SCRIPT PAGINA SALONES *
==================== */

if (window.location.pathname === '*/salones.html') {


    /* Acordeon Salones*/

    (() => {


        const acordeon = document.getElementById('acordeon')

        acordeon.addEventListener("click", (e) => {


            e.target.classList.toggle('active')

            e.target.nextElementSibling.classList.toggle('panel--show')
        })


    })();

    /* LightBox */


    (() => {

        const modal = document.getElementById("modal");

        const imagenModal = document.getElementById("imagen__modal")

        const imagenes = document.querySelectorAll('.imagen__salones')

        imagenes.forEach(imagen => {

            imagen.addEventListener("click", (e) => {

                addImagen(imagen.getAttribute('src'), imagen.getAttribute('alt'));
            })

        })

        const addImagen = (src, alt) => {

            modal.classList.add("modal--show");
            imagenModal.src = src;

        }

        const cerrarModal = () => {

            modal.addEventListener("click", (e) => {

                e.stopPropagation()

                e.target.classList.contains("modal") && modal.classList.remove("modal--show")


            })
        }

        cerrarModal()
    })();


}


/* =======================
	* SCRIPT PAGINA EDITOR *
========================== */

if(window.location.pathname === '/editor.html'){

// const pagina = document.getElementById('paginaBlog')
//     pagina.textContent = 'hola hola'

    

    var useDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    tinymce.init({
        selector: 'textarea#tiny',
        plugins: 'print preview paste importcss searchreplace autolink  save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
        imagetools_cors_hosts: ['picsum.photos'],
        menubar: 'file edit view insert format tools table help',
        toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
        toolbar_sticky: true,
        // autosave_ask_before_unload: true,
        // autosave_interval: '30s',
        // autosave_prefix: '{path}{query}-{id}-',
        // autosave_restore_when_empty: false,
        // autosave_retention: '2m',
        image_advtab: true,
        // link_list: [
        //     { title: 'My page 1', value: 'https://www.tiny.cloud' },
        //     { title: 'My page 2', value: 'http://www.moxiecode.com' }
        // ],
        // image_list: [
        //     { title: 'My page 1', value: 'https://www.tiny.cloud' },
        //     { title: 'My page 2', value: 'http://www.moxiecode.com' }
        // ],
        // image_class_list: [
        //     { title: 'None', value: '' },
        //     { title: 'Some class', value: 'class-name' }
        // ],
        importcss_append: true,
        file_picker_callback: function(callback, value, meta) {
            /* Provide file and text for the link dialog */
            if (meta.filetype === 'file') {
                callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
            }

            /* Provide image and alt text for the image dialog */
            if (meta.filetype === 'image') {
                callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
            }

            /* Provide alternative source and posted for the media dialog */
            if (meta.filetype === 'media') {
                callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
            }
        },
        templates: [
            { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
            { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
            { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
        ],
        template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
        template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
        height: 700,
        image_caption: true,
        quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
        noneditable_noneditable_class: 'mceNonEditable',
        toolbar_mode: 'sliding',
        contextmenu: 'link image imagetools table',
        skin: useDarkMode ? 'oxide-dark' : 'oxide',
        content_css: useDarkMode ? 'dark' : 'default',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    });

    //LowDb

    let adapter = new LocalStorage('db')
    let db = low(adapter)

    console.log(db)

    const form = document.getElementById('form')

    const mostrarDatos = document.getElementById('mostrarDatos')
    console.log(mostrarDatos)

    

    

    const addentry = (datosFormulario, titulo, foto) => {
        const div = document.createElement('DIV')
        const imagen = document.createElement('IMG')
        const h1 = document.createElement('H1')
        const p = document.createElement('P')

        div.class = 'card'
        div.id = 'card'

        if (!foto) {
            let mensaje = 'Por favor, selecciona un archivo de imagen. Es un dato obligatorio. Gracias!!'
            mostrarDatos.innerHTML = `<p>${mensaje}</p>`

        } else {


            objetoUrl = URL.createObjectURL(foto)
            imagen.src = objetoUrl
            imagen.class = 'img__card'
            imagen.id = 'img__card'

        }

        if (!titulo) {
            let mensaje = 'Por favor, introduzca un título. Es un dato obligatorio. Gracias!!'
            mostrarDatos.innerHTML = `<p>${mensaje}</p>`

        } else {


            h1.class = 'titulo'
            h1.id = 'titulo'
            h1.textContent = titulo
        }
        if (!datosFormulario) {
            let mensaje = 'Por favor, introduzca datos del post. Es un dato obligatorio. Gracias!!'
            mostrarDatos.innerHTML = `<p>${mensaje}</p>`

        } else {


            p.class = 'parrafo'
            p.id = 'parrafo'
            p.textContent = datosFormulario

        }

        div.appendChild(imagen)
        div.appendChild(h1)
        div.appendChild(p)

        mostrarDatos.outerHTML(div)
    }


    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const datosFormulario = document.getElementById('tiny_ifr').contentWindow.document.getElementById('tinymce').textContent

        const titulo = document.getElementById('titulo').value

        const input = document.getElementById('fotos')

        const foto = input.files[0]

        console.log(titulo)
        console.log(datosFormulario)
        addentry(datosFormulario, titulo, foto)

    })


}
/*==============Javascript ir arriba boton=======*/

(() => {

    const bntArriba = document.getElementById('toTop')

    window.addEventListener("scroll", (e) => {

        let scroll = window.pageYOffset || document.documentElement.scrollTop;


        if (scroll > 200) {
            bntArriba.classList.remove('hidden');
        } else {

            bntArriba.classList.add('hidden');
        }

        bntArriba.addEventListener("click", (e) => {

            e.preventDefault()
            window.scrollTo({

                behavior: "smooth",
                top: 0,
                left: 0
            })
        });
    });



})();


/* =======================
	* SCRIPT PAGINA LOGIN *
========================== */

if (window.location.pathname === '/login.html') {

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




}


/* =======================
	* SCRIPT PAGINA TIENDA *
========================== */

if (window.location.pathname === '/tienda.html') {


    const cards = document.getElementById('cards')
    const items = document.getElementById('items')
    const table = document.getElementById('table')
    const botones = document.getElementById('botones')
    const carroCompra = document.getElementById('carro-compra')
    const itemsModal = document.getElementById('itemsModal')
    const footer = document.getElementById('footer')
    const templateCard = document.getElementById('template-card').content
    const templateFooter = document.getElementById('template-footer').content
    const templateCarrito = document.getElementById('template-carrito').content
    const templateBotones = document.getElementById('template-botones').content
    const fragment = document.createDocumentFragment()
    let carrito = {}
        // Eventos
        // El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
    document.addEventListener('DOMContentLoaded', e => {
        tablaOculta()
        fetchData()
        if (localStorage.getItem('carrito')) {
            carrito = JSON.parse(localStorage.getItem('carrito'))
            pintarCarrito()
        }

    });

    //Tabla oculta al inicio

    const tablaOculta = () => {


        if (carrito.length >= 1) {
            table.style.display = 'block'
        } else {
            table.style.display = 'none'
        }
    }
    cards.addEventListener('click', e => { addCarrito(e) });
    items.addEventListener('click', e => { btnAumentarDisminuir(e) })
    botones.addEventListener('click', e => {
        cerrar(e),
            finalizarCompra(e)
    });
    carroCompra.addEventListener('click', e => { mostrarCarro(e) });

    // Traer productos
    const fetchData = async() => {
        const res = await fetch('api.json');
        const data = await res.json()
            // console.log(data)
        pintarCards(data)
    }

    // Pintar productos
    const pintarCards = data => {
        data.forEach(item => {
            templateCard.querySelector('h5').textContent = item.title
            templateCard.querySelector('p').textContent = item.precio 
            templateCard.querySelector('img').srcset = item.thumbnailUrl
            templateCard.querySelector('button').dataset.id = item.id

            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        })
        cards.appendChild(fragment)
    }

    // Agregar al carrito
    const addCarrito = e => {
        if (e.target.classList.contains('btn-dark')) {
            // console.log(e.target.dataset.id)
            // console.log(e.target.parentElement)
            setCarrito(e.target.parentElement)
            table.style.display = 'block'
            botones.style.display = 'block'
            
        }
        e.stopPropagation()
    }

    const setCarrito = item => {
        console.log(item)
        const producto = {
                title: item.querySelector('h5').textContent,
                precio: item.querySelector('p').textContent,
                id: item.querySelector('button').dataset.id,
                cantidad: 1
            }

            console.log(producto)
        if (carrito.hasOwnProperty(producto.id)) {
            producto.cantidad = carrito[producto.id].cantidad + 1
        }

        carrito[producto.id] = {...producto }

        pintarCarrito()
    }



    const pintarCarrito = () => {
        items.innerHTML = ''

        Object.values(carrito).forEach(producto => {
            templateCarrito.querySelector('th').textContent = producto.id
            templateCarrito.querySelectorAll('td')[0].textContent = producto.title
            templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
            templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad

            //botones
            templateCarrito.querySelector('.btn-info').dataset.id = producto.id
            templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

            const clone = templateCarrito.cloneNode(true)
            fragment.appendChild(clone)
        })
        items.appendChild(fragment)

        pintarFooter()

        pintarBotones()

        localStorage.setItem('carrito', JSON.stringify(carrito))
    }



    const pintarFooter = () => {
        footer.innerHTML = ''

        if (Object.keys(carrito).length === 0) {
            footer.innerHTML = `
            <th scope="row" colspan="5">Carrito vacío...</th>
            `
            return
        }

        // sumar cantidad y sumar totales
        const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
        const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)
            // console.log(nPrecio)

        templateFooter.querySelectorAll('td')[0].textContent = nCantidad
            //templateFooter.querySelectorAll('td')[3]
        templateFooter.querySelector('span').textContent = nPrecio

        const clone = templateFooter.cloneNode(true)
        fragment.appendChild(clone)

        footer.appendChild(fragment)

        const boton = document.querySelector('#vaciar-carrito')
        boton.addEventListener('click', () => {
            carrito = {}
            pintarCarrito()
        })


    }



    const btnAumentarDisminuir = e => {
        // console.log(e.target.classList.contains('btn-info'))
        if (e.target.classList.contains('btn-info')) {
            const producto = carrito[e.target.dataset.id]
            producto.cantidad++
                carrito[e.target.dataset.id] = {...producto }
            pintarCarrito()
        }

        if (e.target.classList.contains('btn-danger')) {
            const producto = carrito[e.target.dataset.id]
            producto.cantidad--
                if (producto.cantidad === 0) {
                    delete carrito[e.target.dataset.id]
                } else {
                    carrito[e.target.dataset.id] = {...producto }
                }
            pintarCarrito()
        }
        e.stopPropagation()
    }



    const pintarBotones = () => {

        botones.innerHTML = ''
        templateBotones.querySelectorAll('td')
        const clone = templateBotones.cloneNode(true)

        fragment.appendChild(clone)

        botones.appendChild(fragment)



    }

    const cerrar = (e) => {

        if (e.target.classList.contains('btn-secondary')) {

            table.style.display = 'none'
            botones.style.display = 'none'
        }

        e.stopPropagation()
    }

   



    const finalizarCompra = (e) => {

        if (e.target.classList.contains('btn-primary')) {

            console.log('enviando')
            e.preventDefault()
            window.location.href = "/pagar.html"

            
        }

        e.stopPropagation()

    }

    const mostrarCarro = (e) => {

        if (e.target.classList.contains('bi-cart3')) {


            table.style.display = 'block'
            botones.style.display = 'block'
        }


        e.stopPropagation()
    }


    

    //Javascript pagina de pagos



}



/*==============Javascript para PWA==============*/

(() => {

    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register('./sw.js')

        .then(reg => console.log('registro exitoso', reg))
            .catch(err => console.warn('error al tratar de registrar sw', err))
    }

})();





/*==============Javascript para cargar idioma=============*/

// (() => {


//     addEventListener('load', function() {


//         let ln = navigator.language || navigator.userLanguage;
//         //console.log(ln);
//         /*Validar que no se encuentre en la pagina correspondiente a su idioma*/
//         let pagActual = window.location.pathname;
//         //console.log(pagActual);


//         if (ln == 'en-EN' && !pagActual.includes("/ingles/index.html")) {
//             window.location.href = './ingles/index.html';
//         } else if (ln == 'es-ES' && !pagActual.includes("index.html")) {
//             window.location.href = './index.html';
//         } else if (ln == 'fr-FR' && !pagActual.includes("/frances/index.html")) {
//             window.location.href = './frances/index.html';
//         } else {
//             // console.log("Otro idioma");
//         }



//     });




// })();



/*==============Javascript para mensaje cookies===========*/

(() => {

    addEventListener('load', function() {

        let modalCookies = document.querySelector('#modalCookies');

        let btnAceptarCookies = document.querySelector('#btnAceptarCookies');

        let btnDenegarCookies = document.querySelector('#btnDenegarCookies');

        let btnAceptarCookiesValue = document.querySelector('#btnAceptarCookies').textContent;

        let btnDenegarCookiesValue = document.querySelector('#btnDenegarCookies').textContent;

        let enlacesMenu = document.querySelector('.navegador .enlaces a');


        let arrAceptar = btnAceptarCookiesValue.split("");
        let textAceptar = "";
        let i;

        for (i = 0; i < arrAceptar.length; i++) {

            textAceptar += arrAceptar[i] 
        }

        btnAceptarCookies.innerHTML = textAceptar;



        let arrDenegar = btnDenegarCookiesValue.split("");
        let textDenegar = "";


        for (let i = 0; i < arrDenegar.length; i++) {

            textDenegar += arrDenegar[i] 
        }

        btnDenegarCookies.innerHTML = textDenegar;

        function siAceptaCookie() {

            // enlacesMenu.style.color = 'red';
        }

        if (sessionStorage.getItem('cookie')) {



            modalCookies.style.display = 'none';
            modalCookies.style.opacity = '0';


        } else {



            modalCookies.style.display = 'block';
            modalCookies.style.opacity = '1';
            modalCookies.style.zIndex = '2000';


            btnAceptarCookies.addEventListener('click', function() {

                modalCookies.style.display = 'none';

                sessionStorage.setItem('cookie', true);

                siAceptaCookie();
            });



            btnDenegarCookies.addEventListener('click', function() {

                modalCookies.style.display = 'none';
                sessionStorage.setItem('cookie', false);


            });
        }


    });



})();