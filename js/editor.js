/* =======================
	* SCRIPT PAGINA EDITOR *
========================== */



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
    
    
    