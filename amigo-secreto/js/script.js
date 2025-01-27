// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = '';
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para sortear.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const amigosSorteados = [...amigos];
    const asignaciones = {};

    amigos.forEach(amigo => {
        let amigoSecreto;
        do {
            const index = Math.floor(Math.random() * amigosSorteados.length);
            amigoSecreto = amigosSorteados[index];
        } while (amigoSecreto === amigo);

        asignaciones[amigo] = amigoSecreto;
        amigosSorteados.splice(amigosSorteados.indexOf(amigoSecreto), 1);
    });

    for (const [amigo, amigoSecreto] of Object.entries(asignaciones)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} tiene como amigo secreto a ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}