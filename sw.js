

//asignar un nombre y version al cache

const CACHE_NAME = 'v1_web',
urlsToCache = [

	'./',
	'./ofertas.html',
	'./salones.html',
	'./css/style.css',
	'./css/ofertas.css',
	'./css/salones.css',
	'./css/normalize.css',
	'./images/g1.jpg',
	'./images/g2.jpg',
	'./images/g3.jpg',
	'./images/g4.jpg',
	'./images/g5.jpg',
	'./images/g6.jpg',
	'./images/g7.jpg',
	'./images/g8.jpg',
	'./images/g9.jpg',
	'./images/g10.jpg',
	'./images/g11.jpg',
	'./images/g12.jpg',
	'./images/a1.jpg',
	'./images/b1.jpg',
	'./images/c1.jpg',
	'./images/c2.jpg',
	'./images/c3.jpg',
	'./images/c4.jpg',
	'./images/s1.jpg',
	'./images/s2.jpg',
	'./images/s3.jpg',
	'./images/s4.jpg',
	'./images/t1.jpg',
	'./images/t2.jpg',
	'./images/t3.jpg',
	'./images/t4.jpg',
	'./images/español.png',
	'./images/frances.png',
	'./images/ingles.png',
	'./images/foto-portada-galeria.jpg',
	'./images/to-top.png',
	'./css/font-awesome.css'


]

//durante la fase de instalación, generalmente se almacena en caché
//los recursos estáticos.

self.addEventListener('install', e=>{

	e.waitUntil(

		caches.open(CACHE_NAME)
			.then(cache=>{
				return cache.addAll(urlsToCache)
				.then(()=>self.skipWaiting())
			})

			.catch(err=>console.log('Fallo registro de cache', err))
		)
})

//una vez que se instala el SW, se activa y busca los recursos
//para hacer que funcione sin conexión.


self.addEventListener('activate', e=>{

const cacheWhiteList = [CACHE_NAME]

	e.waitUntil(

		caches.keys()

			.then(cachesNames=>{

				cachesNames.map(cacheName=>{

					//Eliminamos lo que ya no se necesita en cache

					if(cacheWhiteList.indexOf(cacheName)=== -1){

						return caches.delete(cacheName)
					}
				})
			})
			// Le indica al SW activar el cache actual	
			.then(() => self.clients.claim())	

		)


})

//cuando el navegador recupera una url

self.addEventListener('fetch', e=>{

//Responder ya sea con el objeto en caché o continuar y buscar
//la url real

e.respondWith(

	caches.match(e.request)

		.then(res=>{

			if(res){

				//recupera el cache
				return res
			}
				//recuperar la peticion a la url

			return fetch(e.request)

		})

	)
})

