const contenedor = document.getElementById("contenedor");
const API_KEY = "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd";
let dataMovies; // Variable global para almacenar las películas

fetch('https://moviestack.onrender.com/api/movies', {
    method: "GET",
    headers: {
        'x-api-key': API_KEY,
    },
})
.then((response) => response.json())
.then((data) => {
    dataMovies = data.movies; // Asignar los datos a la variable global
    dataMovies.forEach((movie) => {
        movie.image = `https://moviestack.onrender.com/static/${movie.image}`;
    });
    imprimirCardHtml(dataMovies);
})
.catch(error => {
    console.error("Hubo un error:", error);
})
.finally(() => {
    console.log("Finally is here");
});

// Función para estructurar la tarjeta de película
function estructuraCard(movie) {
    return `<div class="gap-4 mt-4">
        <div class="relative flex flex-wrap w-80 bg-white rounded-lg shadow-lg overflow-hidden gap-3">
            <button id="corazon" class="corazon-btn absolute top-2 right-2 text-white-500 text-2xl outline-none" onclick="this.classList.toggle('text-red-500'); this.innerHTML = this.innerHTML === '&#10084;' ? '&#129293;' : '&#10084;'">&#129293;</button>
            <img class="w-full h-48 object-cover" src="${movie.image}" alt="Card Image">
            <div class="p-4 flex flex-col justify-between">
                <div>
                    <h2 class="text-lg font-bold text-gray-800 mb-2">${movie.title}</h2>
                    <span class="text-sm text-gray-500">${movie.tagline}</span>
                    <p class="text-gray-700 mt-2 line-clamp-3 overflow-hidden overflow-ellipsis">${movie.overview}</p>
                </div>
                <a href="./details.html?id=${movie.id}" class="bg-rose-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2 text-center">Ver +</a>
            </div>
        </div>
    </div>`;
}

// Función para imprimir las tarjetas HTML de las películas
function imprimirCardHtml(listaMovies) {
    let cards = "";
    listaMovies.forEach(movie => {
        cards += estructuraCard(movie);
    });
    contenedor.innerHTML = cards;
}

let selector = document.getElementById("select");
const inputBusqueda = document.getElementById("search");

// Función para manejar el evento de cambio en el selector
let callbackEventoSeleccionar = (evento) => {
    let genero = evento.target.value; // Obtener el valor seleccionado
    if (dataMovies) {
        let arrayGeneroFiltrado = filtrarGenero(dataMovies, genero); // Filtrar películas por género
        let busqueda = inputBusqueda.value.trim().toLowerCase(); // Obtener la búsqueda actual
        let peliculasFiltradas = filtrarPorBusqueda(arrayGeneroFiltrado, busqueda); // Filtrar por búsqueda
        imprimirCardHtml(peliculasFiltradas); // Imprimir las tarjetas HTML
    }
};

// Función para manejar el evento de búsqueda
let callbackEventoBuscar = (evento) => {
    let busqueda = inputBusqueda.value.trim().toLowerCase(); // Obtener la búsqueda actual
    if (dataMovies) {
        let genero = selector.value; // Obtener el género seleccionado
        let arrayGeneroFiltrado = filtrarGenero(dataMovies, genero); // Filtrar películas por género
        let peliculasFiltradas = filtrarPorBusqueda(arrayGeneroFiltrado, busqueda); // Filtrar por búsqueda
        imprimirCardHtml(peliculasFiltradas); // Imprimir las tarjetas HTML
    }
};

// Agregar eventos a los elementos
selector.addEventListener("change", callbackEventoSeleccionar);
inputBusqueda.addEventListener("input", callbackEventoBuscar);

// Función para filtrar películas por género
function filtrarGenero(array, generoSeleccionado) {
    let genero = generoSeleccionado.toLowerCase(); // Convertir a minúsculas

    if (genero === "default") {
        return array; // Si se selecciona "default", devolver todas las películas
    }

    let generoFiltrado = array.filter((movie) => {
        return movie.genres.some((g) => g.toLowerCase() === genero);
    });

    return generoFiltrado;
}

// Función para filtrar películas por búsqueda
function filtrarPorBusqueda(array, busqueda) {
    if (!busqueda) {
        return array; // Si la búsqueda está vacía, mostrar todas las películas
    }

    return array.filter((movie) => movie.title.toLowerCase().includes(busqueda));
}
