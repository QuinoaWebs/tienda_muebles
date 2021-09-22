/* ====================
	* SCRIPT PAGINA SALONES *
==================== */



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


