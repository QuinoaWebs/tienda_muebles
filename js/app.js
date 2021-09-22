


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