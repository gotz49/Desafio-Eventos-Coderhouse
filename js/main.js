
//? REGISTRO 


const formRegistro = document.getElementById("formRegistro");

formRegistro.onsubmit = (e) => {
     e.preventDefault();
     const email = document.querySelector("#emailRegistro").value;
     const password = document.querySelector("#passwordRegistro").value;
     
     const newUser = {
          email,
          password
     }
     
     const enJSON = JSON.stringify(newUser);
     localStorage.setItem("user", enJSON);
     
     formRegistro.reset();
};





//? INICIAR SESION 

const email = document.querySelector("#emailLogin");
const password = document.querySelector("#passwordLogin");

formLogin = document.querySelector("#formLogin");

formLogin.onsubmit = (e) => {
	e.preventDefault();
	const email = document.querySelector("#emailLogin").value;
    const password = document.querySelector("#passwordLogin").value;
    
    const loginVerify = {
		email,
		password
	}
    
    console.log(loginVerify);
    
    
    const userVerify = JSON.parse(localStorage.getItem("user"));
    
    console.log(userVerify);
    
    if (email === userVerify.email && password === userVerify.password) {
		alert(`Bienvenido ${loginVerify.email}`)
		formLogin.reset();
	} else {
		alert("Credenciales incorrectas o no registradas")
		
		formLogin.reset();
	}
    
};






