const datos = {
    nombre: "",
    celular: "",
    correo: "" ,
    mensaje: ""
}

//Evento de los input
const nombre = document.querySelector("#nombre");
const celular = document.querySelector("#celular");
const correo = document.querySelector("#correo");
const mensaje = document.querySelector("#mensaje");
//console.log(mensaje);

//prueba EventListener
//nombre.addEventListener('input', prueba);
//function prueba(){
    //alert('ingresaste el nombre');
//}

nombre.addEventListener('input', leerTexto);
celular.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento){
    //console.log(evento.target.value);
    datos[evento.target.id] = evento.target.value;
    //console.log(datos);
}

const formulario = document.querySelector('.formulario');
//console.log(formulario);

formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    //---> destructuring
    const {nombre, celular, correo, mensaje} = datos;
    //console.log(nombre, celular, correo, mensaje);
        if(nombre === ''|| celular === ''|| correo === ''|| mensaje === ''){

     mostrarError('Diligencia todos los campos');
     return; //---> corta la ejecucion del codigo   
    }   

 function mostrarError(mensaje){
    //console.log(mensaje);
    let error = document.createElement('p');
    error.textContent = mensaje; 
    error.classList.add('error');
    //console.log(error);
    formulario.appendChild(error);
} 


})




