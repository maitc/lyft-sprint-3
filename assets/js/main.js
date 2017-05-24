function clickStart(){
		//traer contenedor
		var conSection = document.getElementsByClassName("contenedor-lyft")[0];
		//boton start
		boton = document.getElementById("start");
		//inputs, valores.
		
		boton.addEventListener("click", function(){
			var carX = document.getElementsByClassName("p-x")[0].value;
			var carY = document.getElementsByClassName("p-y")[0].value;
		
			if(carX == 0 && carY == 0){
				alert("No puedes dejar los espacios en blanco");
				return false;
			}else if(carX > 10 || carY > 5){
				alert("Coordenada X debe ser 1 al 10, como coordenada Y debe ser 1 al 5");
				return false;
			}
			// crear div que me tendrá el cuadro
			var cuadroJuego = document.createElement("div");
			cuadroJuego.classList.add("tablero");
			conSection.appendChild(cuadroJuego);;
		})
}
clickStart();

//validacion cuadro de ingresar telefono.
function validacionNumero(){
	var inputPhone = document.getElementById("registro-input").value;
	var boton = document.getElementById("registro-button");

	boton.addEventListener("click", function(){
		if(inputPhone == 0){
			alert("No puedes dejar el espacio en blanco");
			return false;
		}else if(inputPhone.length < 9){
			alert("Debe ser número de celular de 9 dígitos");
			return false;
		}
	});
}
validacionNumero();


/*se traer contenedores
		var contDiv = document.getElementsByClassName("contenedor-lyft")[0];
		var boton = document.getElementById("start");
		//creamos div que contendrá todo
		var div = document.createElement("div");
		div.classList.add("play-lyft");
		contenedorDiv.appendChild(div);
		//segundo div tendra tablero
		var divDos = document.createElement("div");
		divDos.setAttribute("id", "tablero");
		contDiv.appendChild(divDos);*/