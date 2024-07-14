//Capturamos a traves de su ID el div contenedor
let contenedor = document.getElementById("contenedor");
console.log(contenedor);

//Creamos una funcion con la estructura card para representar las peliculas
function estructuraCard(movie) {
  return `<div class="gap-4 mt-4">
            <div class="flex flex-wrap flex-row w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden gap-3">
                <!-- Card Image -->
                <img class="w-full h-48 object-cover" src="${movie.image}" alt="Card Image">
                
                <!-- Card Content -->
                <div class="p-4 text-center">
                    <div class="flex justify-center items-center">
                        <h2 class="text-l font-bold w-full text-gray-800 mb-2 justify-center">${movie.title}</h2>
                        <span class="text-sm text-gray-500">${movie.tagline}</span>
                    </div>
                    <p class="text-gray-700 mb-4 text-overflow: ellipsis">${movie.overview}</p>
                  
            </div>

      

        </div>
    </div>
    
    `;
}


console.log(estructuraCard);


//Creamos una funcion para que imprima las cards con todas las peliculas que se encuentran en el data.js
function imprimirCardHtml(listaMovies) {
  let cards = "";
  for (const movie of listaMovies) {
    cards += estructuraCard(movie
    );
  }
  contenedor.innerHTML = cards;
}


imprimirCardHtml (movies);




/*function filtrarPorGenero(array, generoBuscado) {
  return array.filter(persona => persona.genero === generoBuscado);
}*/

//-------------------------------------------------FILTRO POR GENERO
//sprint 2
// Función para filtrar por género
/*let selector = document.getElementById('select')


// Función para manejar el evento de cambio en el selector
let callbackEventoSeleccionar = (evento) => {
  let genero = evento.target.value; // Obtener el valor seleccionado
  let arrayGeneroFiltrado = filtrarGenero(movies, genero); // Filtrar películas por género
  let peliculasFiltradas = filtrarPorBusqueda(selector.value, arrayGeneroFiltrado);
  imprimirCardHtml(peliculasFiltradas); // Imprimir las tarjetas HTML
}

// Agregar el evento de cambio al selector
selector.addEventListener('change', callbackEventoSeleccionar);

// Función para filtrar películas por género
function filtrarGenero(array, generoSeleccionado) {
  let genero = generoSeleccionado.toLowerCase(); // Convertir a minúsculas

  if (genero === "default") {
    // Si se selecciona "default", devolver todas las películas
    return array;
  }
  
  let generoFiltrado = array.filter(movie => {
    // Verificar si algún género en el array de la película incluye el género seleccionado
    return movie.genres.some(g => g.toLowerCase() === genero);
  });

  console.log(generoFiltrado); // Mostrar en consola las películas filtradas

  return generoFiltrado;
}

//-------------------------------------------------FUNCIONES PARA FILTRAR POR BUSQUEDA
// Obtener el elemento de entrada de búsqueda
const inputBusqueda = document.getElementById('search');


let callbackEventoBuscar = (evento) => {
  let busqueda = inputBusqueda.value.trim().toLowerCase();
  // Filtrar las películas basadas en la búsqueda
  let peliculasFiltradas = filtrarPorBusqueda(movies, busqueda);
   // Imprimir las tarjetas HTML de las películas filtradas
   let arrayGeneroFiltrado = filtrarGenero(inputBusqueda.value, peliculasFiltradas);

  imprimirCardHtml(arrayGeneroFiltrado);
};

inputBusqueda.addEventListener('input', callbackEventoBuscar)
 

// Función para filtrar películas por búsqueda
function filtrarPorBusqueda(array, busqueda) {
  if (!busqueda) {
    return array; // Si la búsqueda está vacía, mostrar todas las películas
  }

  // Filtrar películas por título o cualquier otro criterio que desees
  return array.filter(movie =>
    movie.title.toLowerCase().includes(busqueda) // Filtrar por título (ajustar según tus necesidades)
  );
}*/


let selector = document.getElementById('select');
const inputBusqueda = document.getElementById('search');

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
selector.addEventListener('change', callbackEventoSeleccionar);
inputBusqueda.addEventListener('input', callbackEventoBuscar);

// Función para filtrar películas por género
function filtrarGenero(array, generoSeleccionado) {
  let genero = generoSeleccionado.toLowerCase(); // Convertir a minúsculas

  if (genero === "default") {
    // Si se selecciona "default", devolver todas las películas
    return array;
  }
  
  let generoFiltrado = array.filter(movie => {
    // Verificar si algún género en el array de la película incluye el género seleccionado
    return movie.genres.some(g => g.toLowerCase() === genero);
  });

  return generoFiltrado;
}

// Función para filtrar películas por búsqueda
function filtrarPorBusqueda(array, busqueda) {
  if (!busqueda) {
    return array; // Si la búsqueda está vacía, mostrar todas las películas
  }

  // Filtrar películas por título (ajustar según tus necesidades)
  return array.filter(movie =>
    movie.title.toLowerCase().includes(busqueda)
  );
}


