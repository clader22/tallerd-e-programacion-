alert("Hola mundo")
var nombre=prompt("Cual es tu nombre?")
alert("Bienvenido "+nombre)
var num=""
//escrbimos while para poner una condicion que si no se cumple, se debe repetir
while(num==""){
	num=prompt("Digite hasta cuanto desea contar")
}
/*if(num==""){
	alert("Cantidad no valida")
}else{*/
    for (cont= 0;cont<=num;cont++) {
	alert(cont)
    }
var continuar=true //true no es un comando, es un valor, el cual solo almacena 2 respuestas
while(continuar){
	continuar=confirm("el conteo va en: " +num+" desea continuar?") //confirm es el que nos da el paso siguiente segun haya sido la respuesta 
	num++
}
var nombre2="valentina"
