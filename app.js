let amigos = [];

function agregarAmigo() {
let input = document.getElementById("amigo");
let nombre = input.value.trim();

if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
}

amigos.push(nombre);
input.value = "";
actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue nombres antes de sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = <li> El amigo secreto es <strong>${amigoSecreto}</strong> </li>;

} 
