
/*==============Javascript para PWA==============*/

if('serviceWorker' in navigator){

	navigator.serviceWorker.register('./sw.js')

		.then(reg=>console.log('registro exitoso', reg))
		.catch(err=>console.warn('error al tratar de registrar sw', err))
}





/*==============Javascript para cargar idioma=============*/

	function cargarIdioma(){


			addEventListener('load', function(){


			  let ln = navigator.language || navigator.userLanguage;
              //console.log(ln);
              /*Validar que no se encuentre en la pagina correspondiente a su idioma*/
              let pagActual = window.location.pathname;
              //console.log(pagActual);
   
   
                if (ln == 'en-EN' && !pagActual.includes("/ingles/index.html")) {
                    window.location.href = './ingles/index.html';  
                } else if (ln == 'es-ES' && !pagActual.includes("index.html")) {
                    window.location.href = './index.html';
                } else if (ln == 'fr-FR' && !pagActual.includes("/frances/index.html")){
                    window.location.href = './frances/index.html';
                } else{
                    // console.log("Otro idioma");
                }



			});




	}






/*==============Javascript para mensaje cookies===========*/

     function cookies(){

                 addEventListener('load', function(){

                    var modalCookies = document.querySelector('#modalCookies');

                    var btnAceptarCookies = document.querySelector('#btnAceptarCookies');

                    var btnDenegarCookies = document.querySelector('#btnDenegarCookies');

                    var btnAceptarCookiesValue = document.querySelector('#btnAceptarCookies').textContent;

                    var btnDenegarCookiesValue = document.querySelector('#btnDenegarCookies').textContent;
                    
                    var enlacesMenu = document.querySelector('.navegador .enlaces a');


                        var arrAceptar = btnAceptarCookiesValue.split("");
                        var textAceptar = "";
                        var i;

                          for(i = 0; i < arrAceptar.length; i++){

                            textAceptar += arrAceptar[i] + "<br>"
                          }

                            btnAceptarCookies.innerHTML = textAceptar;



                        var arrDenegar = btnDenegarCookiesValue.split("");
                        var textDenegar = "";
                        var i;

                          for(i = 0; i < arrDenegar.length; i++){

                            textDenegar += arrDenegar[i] + "<br>"
                          }

                            btnDenegarCookies.innerHTML = textDenegar;       

                        function siAceptaCookie(){

                          // enlacesMenu.style.color = 'red';
                        }    

                  if(sessionStorage.getItem('cookie')){



                        modalCookies.style.display = 'none';
                        modalCookies.style.opacity = '0';
                      

                  }
                  else{



                        modalCookies.style.display = 'block';
                        modalCookies.style.opacity = '1';
                        modalCookies.style.zIndex = '2000';


                            btnAceptarCookies.addEventListener('click', function(){

                            modalCookies.style.display = 'none';

                            sessionStorage.setItem('cookie', true);

                              siAceptaCookie();
                           });



                            btnDenegarCookies.addEventListener('click', function(){

                            modalCookies.style.display = 'none';
                            sessionStorage.setItem('cookie', false);

                              
                           });    
                      }      
                                            
           
                        }); 

                        }

                       


//==============Javascript para ofertas=========//


function moverSeccion(){

	var datosCompra = document.querySelector('#btnDatosCompra');
	var seguirComprando = document.querySelector('#regresarCarro');
	var carro = document.querySelector('#carro');
	var oculta = document.querySelector('#oculta');

		datosCompra.addEventListener('click', function(){
		
			carro.classList.add('moverCarro');
			oculta.classList.add('moverOculta');

	});

		seguirComprando.addEventListener('click', function(){
		
			carro.classList.remove('moverCarro');
			oculta.classList.remove('moverOculta');
		});
}

function finalizarCompra(){


	var btnFinalizarCompra = document.querySelector('#finalizarCompra');
	var cuenta = document.querySelector('#cuenta');
	var form = document.querySelector('#form');

		btnFinalizarCompra.addEventListener('click', function(){

			
			form.submit();
			cuenta.style.display = 'block';
		});
}

cargarIdioma();

cookies();

moverSeccion();	

finalizarCompra();