var num1=parseInt(prompt("digite el primer numero"))
var num2=parseInt(prompt("digite el segundo numero"))
var operacion=prompt("digite la operacion que desea realizar")
var resultado= calculadora(num1, num2,operacion)
mostrarResultado(resultado)

function mostrarResultado(valor){
    alert("el resultado es:"+valor)
}

function calculadora(num1,num2,operacion){
	var resultado 
	if(operacion=="suma"){
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