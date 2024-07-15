//Capturamos a traves de su ID el div contenedor
const contenedor = document.getElementById("contenedor");
console.log(contenedor);


//Creamos una funcion con la estructura card para representar las peliculas
function estructuraCard(movie) {
  // Función para recortar el texto y añadir puntos suspensivos si es necesario
  function recortarTexto(texto, longitudMaxima) {
    if (texto.length > longitudMaxima) {
      return texto.substring(0, longitudMaxima - 3) + "...";
    } else {
      return texto;
    }
  }

  // Ajustar la longitud máxima del texto de overview
  const maxLongitudOverview = 120; // Puedes ajustar este valor según tus necesidades

  // Recortar el texto de overview si es necesario
  const overviewRecortado = recortarTexto(movie.overview, maxLongitudOverview);

  // Estructura de la tarjeta con Tailwind CSS
  return `<div class="gap-4 mt-4">
            <div class="flex flex-wrap flex-row w-80 height-150 bg-white rounded-lg shadow-lg overflow-hidden gap-3">
                <!-- Card Image -->
                <img class="w-full h-48 object-cover" src="${movie.image}" alt="Card Image">
                
                <!-- Card Content -->
                <div class="p-4 text-center flex flex-col justify-between">
                    <div>
                        <h2 class="text-l font-bold text-gray-800 mb-2">${movie.title}</h2>
                        <span class="text-sm text-gray-500">${movie.tagline}</span>
                        <p class="text-gray-700 mt-2 line-clamp-3">${overviewRecortado}</p>
                    </div>
                  
                    <!-- Botón -->
                    <a href="./details.html?id=${movie.id}" class="bg-rose-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-block mt-2">ver +</a>
                </div>
            </div>
        </div>`;
}

console.log(estructuraCard);

//Creamos una funcion para que imprima las cards con todas las peliculas que se encuentran en el data.js
function imprimirCardHtml(listaMovies) {
  let cards = "";
  for (const movie of listaMovies) {
    cards += estructuraCard(movie);
  }
  contenedor.innerHTML = cards;
}

imprimirCardHtml(movies);

//sprint 2

let selector = document.getElementById("select");
const inputBusqueda = document.getElementById("search");

// Función para manejar el evento de cambio en el selector
let callbackEventoSeleccionar = (evento) => {
  let genero = evento.target.value; // Obtener el valor seleccionado
  let arrayGeneroFiltrado = filtrarGenero(movies, genero); // Filtrar películas por género
  let busqueda = inputBusqueda.value.trim().toLowerCase(); // Obtener la búsqueda actual
  let peliculasFiltradas = filtrarPorBusqueda(arrayGeneroFiltrado, busqueda); // Filtrar por búsqueda
  imprimirCardHtml(peliculasFiltradas); // Imprimir las tarjetas HTML
};

// Función para manejar el evento de búsqueda
let callbackEventoBuscar = (evento) => {
  let busqueda = inputBusqueda.value.trim().toLowerCase(); // Obtener la búsqueda actual
  let genero = selector.value; // Obtener el género seleccionado
  let arrayGeneroFiltrado = filtrarGenero(movies, genero); // Filtrar películas por género
  let peliculasFiltradas = filtrarPorBusqueda(arrayGeneroFiltrado, busqueda); // Filtrar por búsqueda
  imprimirCardHtml(peliculasFiltradas); // Imprimir las tarjetas HTML
};

// Agregar eventos a los elementos
selector.addEventListener("change", callbackEventoSeleccionar);
inputBusqueda.addEventListener("input", callbackEventoBuscar);

// Función para filtrar películas por género
function filtrarGenero(array, generoSeleccionado) {
  let genero = generoSeleccionado.toLowerCase(); // Convertir a minúsculas

  if (genero === "default") {
    // Si se selecciona "default", devolver todas las películas
    return array;
  }

  let generoFiltrado = array.filter((movie) => {
    // Verificar si algún género en el array de la película incluye el género seleccionado
    return movie.genres.some((g) => g.toLowerCase() === genero);
  });

  return generoFiltrado;
}

// Función para filtrar películas por búsqueda
function filtrarPorBusqueda(array, busqueda) {
  if (!busqueda) {
    return array; // Si la búsqueda está vacía, mostrar todas las películas
  }

  // Filtrar películas por título (ajustar según tus necesidades)
  return array.filter((movie) => movie.title.toLowerCase().includes(busqueda));
}

