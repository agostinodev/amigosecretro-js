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
        actualizarLista(amigos);

        return amigos;

    }

}

//Funcion para mostrar la lista en el index
function actualizarLista(amigos) {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for( i = 0; i < amigos.length; i++){

        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
    
}