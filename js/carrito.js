


// Variables
let baseDeDatos = [
    {
        id: 1,
        nombre: 'Sillas Salón',
        referencia: 'Referencia: 00210',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos soluta ipsum neque quo eveniet blanditiis accusantium odit velit mollitia laboriosam commodi nemo autem iste asperiores voluptatibus repellat temporibus, dolorem deserunt.',
        precio: 50,
        imagen: './images/g1.jpg'
    },
    {
        id: 2,
        nombre: 'Sofa',
        referencia: 'Referencia: 00211',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos soluta ipsum neque quo eveniet blanditiis accusantium odit velit mollitia laboriosam commodi nemo autem iste asperiores voluptatibus repellat temporibus, dolorem deserunt.',
        precio: 120,
        imagen: './images/g2.jpg'
    },
    {
        id: 3,
        nombre: 'Salón Completo',
        referencia: 'Referencia: 00212',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos soluta ipsum neque quo eveniet blanditiis accusantium odit velit mollitia laboriosam commodi nemo autem iste asperiores voluptatibus repellat temporibus, dolorem deserunt.',
        precio: 2100,
        imagen: './images/g3.jpg'
    },
    {
        id: 4,
        nombre: 'Mesa Auxiliar',
        referencia: 'Referencia: 00213',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos soluta ipsum neque quo eveniet blanditiis accusantium odit velit mollitia laboriosam commodi nemo autem iste asperiores voluptatibus repellat temporibus, dolorem deserunt.',
        precio: 60,
        imagen: './images/g4.jpg'
    },
    {
        id: 5,
        nombre: 'Dormitoria Juvenil',
        referencia: 'Referencia: 00214',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos soluta ipsum neque quo eveniet blanditiis accusantium odit velit mollitia laboriosam commodi nemo autem iste asperiores voluptatibus repellat temporibus, dolorem deserunt.',
        precio: 100,
        imagen: './images/g5.jpg'
    },
    {
        id: 6,
        nombre: 'Dormitorio Matrimonio',
        referencia: 'Referencia: 00215',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos soluta ipsum neque quo eveniet blanditiis accusantium odit velit mollitia laboriosam commodi nemo autem iste asperiores voluptatibus repellat temporibus, dolorem deserunt.',
        precio: 117.50,
        imagen: './images/g6.jpg'
    }

]
let $items = document.querySelector('#items');
let carrito = [];
let subtotal = 0;
let iva;
let porcentaje = 21;
let total = 0;
let $carrito = document.querySelector('#carrito');
let $subtotal = document.querySelector('#subtotal');
let $iva = document.querySelector('#iva');
let $total = document.querySelector('#total');
// Funciones
function renderItems () {
    for (let info of baseDeDatos) {
        // Estructura
        let miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        let miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info['nombre'];
        // Referencia
        let miNodoReferencia = document.createElement('h5');
        miNodoReferencia.classList.add('card-referencia');
        miNodoReferencia.textContent = info['referencia'];
        // Descripcion
        let miNodoDescripcion = document.createElement('h5');
        miNodoDescripcion.classList.add('card-descripcion');
        miNodoDescripcion.textContent = info['descripcion'];
        // Imagen
        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info['imagen']);
        miNodoImagen.setAttribute('loading', 'lazy');
        miNodoImagen.setAttribute('alt', 'imagen de muebles');
        // Precio
        let miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = info['precio'] + '€';
        // Boton 
        let miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Añadir al Carrito';
        miNodoBoton.setAttribute('marcador', info['id']);
        miNodoBoton.addEventListener('click', anyadirCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoReferencia);
        miNodoCardBody.appendChild(miNodoDescripcion);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        $items.appendChild(miNodo);
    }
}
function anyadirCarrito () {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(this.getAttribute('marcador'))
    // Calculo el subtotal
    calcularsubTotal();
    // Calculo de IVA
    calcularIva();
    // Calculo del total
    calcularTotal();
    // Renderizamos el carrito 
    renderizarCarrito();

}

function renderizarCarrito () {
    // Vaciamos todo el html
    $carrito.textContent = '';
    // Quitamos los duplicados
    let carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach(function (item, indice) {
        // Obtenemos el item que necesitamos de la variable base de datos
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        // Cuenta el número de veces que se repite el producto
        let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
            return itemId === item ? total += 1 : total;
        }, 0);

        // Creamos el nodo de la imagen(prueba)

        let miNodoImagenCarrito = document.createElement('img');
        miNodoImagenCarrito.classList.add('img-fluid', 'imgCarrito');
        miNodoImagenCarrito.setAttribute('src', miItem[0]['imagen']);

        console.log(miNodoImagenCarrito);

        // Creamos el nodo del item del carrito
        let miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = ` ${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;

        // Boton de borrar
        let miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5', 'btnBorrar');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.setAttribute('item', item);
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miNodoImagenCarrito);        
        miNodo.appendChild(miBoton);

        $carrito.appendChild(miNodo);
    })
}

function borrarItemCarrito () {
    console.log()
    // Obtenemos el producto ID que hay en el boton pulsado
    let id = this.getAttribute('item');
    // Borramos todos los productos
    carrito = carrito.filter(function (carritoId) {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularsubTotal();
    calcularIva();
    calcularTotal();
}



function calcularsubTotal () {
    // Limpiamos precio anterior
    subtotal = 0;
    // Recorremos el array del carrito
    for (let item of carrito) {
        // De cada elemento obtenemos su precio
        let miItem = baseDeDatos.filter(function(itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        subtotal = subtotal + miItem[0]['precio'];

    }
    // Renderizamos el precio en el HTML
    $subtotal.textContent = subtotal.toFixed(2);



}

function calcularIva(){
    let porcentaje = 21;
    let iva = (subtotal * porcentaje) / 100;

    // Renderizamos el iva

    $iva.textContent = iva;
}

function calcularTotal(){

    let iva = (subtotal * porcentaje) / 100;

    let total = subtotal + iva;

    // Renderizamos el total

    $total.textContent = total;
}

// Eventos

    
// Inicio
renderItems();