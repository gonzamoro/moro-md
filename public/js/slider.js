function carruselImagenes()
{

var uno=document.querySelector('.uno'),
	dos= document.querySelector('.dos'),
	tres= document.querySelector('.tres'),
	cuatro= document.querySelector('.cuatro'),
	cinco= document.querySelector('.cinco'),
	seis= document.querySelector('.seis'),
	ocho= document.querySelector('.ocho'),
	nueve= document.querySelector('.nueve'),
	muestras= document.querySelector('.muestras'),
	nuno=1,
	ndos=3,
	ntres=5,
	ncuatro=7,
	ncinco=9,
	nseis=11,
	nocho=13,
	nnueve=15,
	
	imagenes= new Array(
		'img/petominiatura1.jpg',/*0*/
		'img/petominiatura2.jpg',/*1*/
		'img/parqueminiatura1.jpg',/*2*/
		'img/parqueminiatura2.jpg',/*3*/
		'img/dunminiatura1.jpg',/*4*/
		'img/dunminiatura2.jpg',/*5*/
		'img/hamletminiatura.jpg',/*6*/
		'img/macbethminiatura.jpg',/*7*/
		'img/sandokanminiatura1.jpg',/*8*/
		'img/sandokanminiatura2.jpg',/*9*/
		'img/pizzaminiatura1.jpg',/*10*/
		'img/pizzaminiatura2.jpg',/*11*/
		'img/morodiseñominiatura1.jpg',/*12*/
		'img/morodiseñominiatura2.jpg',/*13*/
		'img/tripticominiatura.jpg',/*14*/
		'img/tripticominiatura2.jpg'/*15*/
		),
	modulo = document.getElementsByClassName('muestras')


	function opacidad(valor)
	{
		setInterval((function(){uno.style.opacity=valor/100}), 14000)
		//uno.style.opacity=valor/100
		setInterval((function(){dos.style.opacity=valor/100}), 12000)
		//dos.style.opacity=valor/100
		setInterval((function(){tres.style.opacity=valor/100}), 17000)
		setInterval((function(){cuatro.style.opacity=valor/100}), 11000)
		setInterval((function(){cinco.style.opacity=valor/100}), 10000)
		setInterval((function(){seis.style.opacity=valor/100}), 15000)
		setInterval((function(){ocho.style.opacity=valor/100}), 15000)
		setInterval((function(){nueve.style.opacity=valor/100}), 11000)
	
			
		console.log(muestras.style.opacity)
	}

	function fadeIn()
	{

		for(var i=0; i<=100; i++)
		{
			setTimeout((function(i){
				return function(){
					opacidad(i)
				}
			})(i), i*20)
		}

	}

	function fadeOut(valorOpacidad, callback)
	{
		
		for(var i=100; i>0; i--)
		{
			setTimeout((function(i){
				return function(){
					opacidad(i)
					if(i==0)
					{
						setInterval((function(){uno.style.backgroundImage ='url(' + imagenes[nuno]  + ')'
						nuno++						
						if(nuno==2)
						{
							nuno=0
						}
					}), 14000)
						//uno.style.backgroundImage ='url(' + imagenes[nuno]  + ')'
						setInterval((function(){dos.style.backgroundImage ='url(' + imagenes[ndos]  + ')'
						ndos++
						if(ndos==4)
						{
							ndos=2
						}
					}), 12000)
						setInterval((function(){tres.style.backgroundImage ='url(' + imagenes[ntres]  + ')'
						ntres++
						if(ntres==6)
						{
							ntres=4
						}
					}), 17000)
						setInterval((function(){cuatro.style.backgroundImage ='url(' + imagenes[ncuatro]  + ')'
						ncuatro++
						if(ncuatro==8)
						{
							ncuatro=6
						}
					}), 11000)
						setInterval((function(){cinco.style.backgroundImage ='url(' + imagenes[ncinco]  + ')'
						ncinco++
						if(ncinco==10)
						{
							ncinco=8
						}
					}), 10000)
						setInterval((function(){seis.style.backgroundImage ='url(' + imagenes[nseis]  + ')'
						nseis++
						if(nseis==12)
						{
							nseis=10
						}
					}), 15000)
						setInterval((function(){ocho.style.backgroundImage ='url(' + imagenes[nocho]  + ')'
						nocho++
						if(nocho==14)
						{
							nocho=12
						}
					}), 15000)
						setInterval((function(){nueve.style.backgroundImage ='url(' + imagenes[nnueve]  + ')'
						nnueve++
						if(nnueve==16)
						{
							nnueve=14
						}
					}), 11000)
						//dos.style.backgroundImage ='url(' + imagenes[ndos]  + ')'
						fadeIn()
					}
				}
			})(100-i), i*20)
		}
	}



	

	fadeOut(fadeIn)

}


carruselImagenes()


