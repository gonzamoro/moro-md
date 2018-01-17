var	nombre=document.getElementById('nombre'),
	email=document.getElementById('email'),
	telefono=document.getElementById('telefono'),
	mensaje=document.getElementById('mensaje'),
	botonEnviar=document.getElementById('enviar'),
	padreAlerta=document.getElementById('formu'),
	sectionAlerta=document.createElement('div'),
	sectionText=[
	document.createTextNode('El campo nombre es requerido'),
	document.createTextNode('El campo nombre solo acepta letras y espacios en blanco'),
	document.createTextNode('El campo email es requerido'),
	document.createTextNode('El campo email no es valido')
	],
	/*divsCaja1=divCaja1.children,*/
	divs=padreAlerta.children,
	expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/,
	expRegEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	tata='',
	tete='';


function validarForm()
{
//NOMBRE---------------------------------
if(!nombre.value) 
	{
		if(tata)
		{
			sectionAlerta.removeChild(sectionText[1]);
		}
		sectionAlerta.appendChild(sectionText[0]);
		divs[0].appendChild(sectionAlerta);
		
		nombre.focus(); /*vuelve el foco a la caja de texto "nombre"*/
		
		tata=false;
		verificar=false;
	}

	else if(!expRegNombre.exec(nombre.value))
	{
		if(!tata)
		{
			sectionAlerta.removeChild(sectionText[0]);
		}
		sectionAlerta.appendChild(sectionText[1]);
		divs[0].appendChild(sectionAlerta);
		nombre.focus();
		
		tata=true;
		verificar=false;
		
	}
/*	else if(expRegNombre.exec(nombre.value) || nombre.value || tata || tete)
	{
		divs[0].removeChild(sectionAlerta);
	}*/
	//EMAIL---------------------------------
	else if(!email.value) 
	{
		if(tete)
			{
				sectionAlerta.removeChild(sectionText[3]);
			}
		sectionAlerta.appendChild(sectionText[2]);
		divs[1].appendChild(sectionAlerta);
		
		nombre.focus(); /*vuelve el foco a la caja de texto "nombre"*/
		tete=false;
		/*alert('El campo email es requerido');*/
		email.focus();

		verificar=false;
	}
	
	else if(!expRegEmail.exec(email.value))
	{
		if(!tete)
		{
			sectionAlerta.removeChild(sectionText[2]);
		}
		
		sectionAlerta.appendChild(sectionText[3]);
		divs[1].appendChild(sectionAlerta);
		nombre.focus();
		tete=true;		
		/*alert('el campo email no es valido');*/
		email.focus();
		verificar=false;
		
	}
	else if(!asunto.value) 
	{
		/*alert('El campo asunto es requerido');*/
		asunto.focus();
		verificar=false;
	}

		else if(!mensaje.value) 
	{
		/*alert('El campo comentarios es requerido');*/
		comentarios.focus();
		verificar=false;
	}

	else if(mensaje.value.length > 255)
	{
		/*alert('El campo comentarios no puede tener mas de 255 caracteres');*/
		comentarios.focus();
		verificar=false;
	}


	if(verificar)
		{
			document.formu.submit();
		}

}



function cargaDocumento()
{
	//botonEnviar.onclick = validarForm;
	botonEnviar.addEventListener("click",validarForm);

}



window.addEventListener("load",cargaDocumento);