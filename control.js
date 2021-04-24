"use strict";

class User {
	constructor (name, lastname, password, DNI, gender, sub, pfp) {
		this.name = name;
		this.lastname = lastname;
		this.password = password;
		this.dni = DNI;
		this.gender = gender;
		this.sub = sub;
		this.pfp = pfp;
	}
}
let user;
function save() {
	let cajon = document.getElementsByClassName("cajon");
	
	user = new User(
		cajon[0].value,
		cajon[1].value,
		cajon[2].value,
		cajon[3].value,
		cajon[4].checked? cajon[4].value : cajon[5].value,
		cajon[6].value,
		new Image()
	);
	user.pfp.src = cajon[7].value;
	
	showInfo();
	
}
function showInfo(){
	let result = document.getElementById("result");
	result.hidden = false;
	result.setAttribute("Style", "min-height:"+document.getElementById("main").offsetHeight+"px");
	result.setAttribute("Style", "min-width:"+document.getElementById("main").offsetWidth+"px");
	
	document.getElementById("_name").innerHTML = "nombre: " + user.name;
	document.getElementById("_lastname").innerHTML = "apellido: " + user.lastname;
	document.getElementById("_password").innerHTML = "contraseña: " + user.password;
	document.getElementById("_dni").innerHTML = "DNI: " + user.dni;
	document.getElementById("_gender").innerHTML = "genero: " + user.gender;
	document.getElementById("_sub").innerHTML = "suscripcion: " + user.sub;
	document.getElementById("pfp").innerHTML = user.pfp;
}