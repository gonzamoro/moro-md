var	nombre=document.getElementById('nombre'),
	email=document.getElementById('email'),
	telefono=document.getElementById('telefono'),
	mensaje=document.getElementById('mensaje'),
	botonEnviar=document.getElementById('enviar'),
	alertanom=document.getElementById('alertanom'),
	alertamail=document.getElementById('alertamail'),
	alertatel=document.getElementById('alertatel'),
	alertamens=document.getElementById('alertamens'),
	texto=[
	'Escriba un nombre',
	'El nombre no es valido',
	'escriba un e-mail',
	'el e-mail no es valido',
	'escriba un telefono',
	'escriba un mensaje',
	'el mensaje no puede superar los 255 caracteres',
	''
	],
	expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/,
	expRegEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	



function validarForm()
{
	var verificar=true;
//NOMBRE---------------------------------
if(!nombre.value) 
	{
		alertanom.innerHTML= texto[0];
		alertanom.style.color= "#FF0000";
		alertanom.style.backgroundColor= "#FFA9A9";
		nombre.focus(); /*vuelve el foco a la caja de texto "nombre"*/
		
		verificar=false;
	}

	else if(!expRegNombre.exec(nombre.value))
	{
		alertanom.innerHTML= texto[1];
		alertanom.style.color= "#FF0000";
		alertanom.style.backgroundColor= "#FFA9A9";
		nombre.focus();
	
		verificar=false;
		
	}
/*	else if(expRegNombre.exec(nombre.value)||nombre.value)
	{
		alertanom.innerHTML= texto[1];
		alertanom.style.backgroundColor= "#E5755D";
		nombre.focus();
	
		verificar=false;
		
	}
*/
	//EMAIL---------------------------------
	else if(!email.value) 
	{

		alertamail.innerHTML= texto[2];
		alertamail.style.color= "#FF0000";
		alertamail.style.backgroundColor= "#FFA9A9";
		nombre.focus(); /*vuelve el foco a la caja de texto "nombre"*/
		/*alert('El campo email es requerido');*/
		email.focus();

		verificar=false;
	}
	
	else if(!expRegEmail.exec(email.value))
	{
		alertamail.innerHTML= texto[3];
		alertamail.style.color= "#FF0000";
		alertamail.style.backgroundColor= "#FFA9A9";

		nombre.focus();	
		/*alert('el campo email no es valido');*/
		email.focus();
		verificar=false;
		
	}
	else if(!telefono.value) 
	{
		alertatel.innerHTML= texto[4];
		alertatel.style.color= "#FF0000";
		alertatel.style.backgroundColor= "#FFA9A9";
		/*alert('El campo asunto es requerido');*/
		telefono.focus();
		verificar=false;
	}

		else if(!mensaje.value) 
	{
		alertamens.innerHTML= texto[5];
		alertamens.style.color= "#FF0000";
		alertamens.style.backgroundColor= "#FFA9A9";
		/*alert('El campo comentarios es requerido');*/
		mensaje.focus();
		verificar=false;
	}

	else if(mensaje.value.length > 255)
	{
		alertamens.innerHTML= texto[6];
		alertamens.style.color= "#FF0000";
		alertamens.style.backgroundColor= "#FFA9A9";
		/*alert('El campo comentarios no puede tener mas de 255 caracteres');*/
		mensaje.focus();
		verificar=false;
	}
	
	if(verificar)
	{
		document.formu.submit();
	}
}




function valido(e)
{
	var queCaja = e.target;
	if(queCaja.id == "nombre")
	{
		alertanom.innerHTML=texto[7];
	}
	else if(queCaja.id == "email")
	{
		alertamail.innerHTML=texto[7];
	}
	else if(queCaja.id == "telefono")
	{
		alertatel.innerHTML=texto[7];
	}
	else if(queCaja.id == "mensaje")
	{
		alertamens.innerHTML=texto[7];
	}

}



function cargaDocumento()
{
	//botonEnviar.onclick = validarForm;
	botonEnviar.addEventListener("click",validarForm);
	nombre.addEventListener("blur", valido);
	email.addEventListener("blur", valido);
	telefono.addEventListener("blur", valido);
	mensaje.addEventListener("blur", valido);
}



window.addEventListener("load",cargaDocumento);