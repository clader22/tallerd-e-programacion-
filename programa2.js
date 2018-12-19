radio=prompt("Digite a continuacion el radio del circulo ") //prompt muestra el mensaje y deja ingresar un dato
while(radio==""){
	radio=prompt("Es necesario digitar el numero para continuar") // || significa o 
}
pi=3.1416
perimetro=2*pi*radio 
area=pi*radio*radio
alert("se dice que entonces el perimetro es igual a: "+ perimetro) //alert solo se utiliza para mostrar un mensaje 
alert("segun el radio de esta circunferencia el area es: "+area)