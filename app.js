//Lista de amigos
let amigos = [];


//Funcion para agregar amigos a la lista
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    
    //Validación para el nombre
    if(nombre == ''){

        alert('Por favor, inserte un nombre');

    }else{

        amigos.push(nombre);
        document.getElementById('amigo').value = '';

    }

    console.log(amigos);

}
