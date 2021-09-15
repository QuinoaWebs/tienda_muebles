




        /* ====================
	* MENU RESPONSIVE *
==================== */
(() => {
    
    console.log('funcionando')

        const iconMenu = document.getElementById('icon-menu');
        const mainMenu = document.getElementById('main-menu');




        iconMenu.addEventListener('click', (e) => {

            e.preventDefault()
            mainMenu.classList.toggle('menu--show');
        });

    })();

    
    const items = document.getElementById('items')
    const table = document.getElementById('table')
    const botones = document.getElementById('botones')
    const carroCompra = document.getElementById('carro-compra')
    // const itemsModal = document.getElementById('itemsModal')
    // const footer = document.getElementById('footer')
    const templateFooter = document.getElementById('template-footer').content
    const templateCarrito = document.getElementById('template-carrito').content
    const templateBotones = document.getElementById('template-botones').content
    const fragment = document.createDocumentFragment()
    let carrito = {}
        // Eventos
        // El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado
    document.addEventListener('DOMContentLoaded', e => {
        

       

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
      
        if (localStorage.getItem('carrito')) {
            carrito = JSON.parse(localStorage.getItem('carrito'))
            pintarCarrito()
        }

        

    });

  

  
   
    items.addEventListener('click', e => { btnAumentarDisminuir(e) })
    botones.addEventListener('click', e => {
        cerrar(e),
            finalizarCompra(e)
    });
    // carroCompra.addEventListener('click', e => { mostrarCarro(e) });

 



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





      


