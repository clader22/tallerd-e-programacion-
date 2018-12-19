alert("digite sus notas para calcular el promedio")
	nota1=parseInt(prompt("Digite la primera nota"))
	nota2=parseInt(prompt("Digite la segunda nota"))//parseInt es el que convierte de texto a numero 
	nota3=parseInt(prompt("Digite la tercera nota"))
	nota4=parseInt(prompt("digite la cuarta nota"))
	suma=nota1+nota2+nota3+nota4
	promedio=suma/4
	alert("El promedio de su materia es: "+promedio)
//podemos realizar nuestras propias funciones (TEMA DE FUNCIONES) 
mostrarMensajes()
resultado=sumar(4,7)
mostrarResultado(resultado )
function sumar (num1,num2) {	
	return num1+num2  //return se utiliza para que el resultado se nos muestre, de lo contrario, esto no se llevaria acabo 
}
function mostrarMensajes (){
	alert("este es un mensaje")
}
function mostrarResultado(valor){
	alert("el resultado es:"+valor)
}
function calculadora(num1,num2,operacion){
	var resultado 
	if(opercion=="suma"){
		resultado=num1+num2
    } else if(operacion=="resta"){
    	resultado=num1-num2
    } else if(operacion=="multiplicacion"){
    	resultado=num1*num2
    } else if(operacion=="division"){
    	resultado=num1/num2
    }
	return resultado
}