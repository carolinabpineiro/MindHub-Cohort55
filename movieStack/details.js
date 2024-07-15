
const verMas = document.getElementById('verMas');
let detailsMovie = window.location.search;
let urlParams = new URLSearchParams(detailsMovie);

console.log(urlParams)
console.log(detailsMovie)

if(urlParams.has('id')){
  let movie = movies.find((movie) => movie.id == urlParams.get('id'))
console.log(movie);
verMas.innerHTML =`
<div class="container mx-auto p-4 bg-white rounded-lg shadow-lg">
    <div class="flex justify-between mb-4">
      <h1 class="text-3xl font-bold text-gray-800">${movie.title}</h1>
    </div>
    <div class="flex flex-wrap gap-4">
      <div class="flex flex-row w-full md:w-2/3">
        <div class="flex flex-row space-y-4">
          <img src="${movie.image}" alt="Imagen de la película" class="w-full h-80 object-cover rounded-lg mb-4">

          <div>
            
            <p class="text-gray-600 mb-2"><span claass="font-bold">Frase clave:</span> ${movie.tagline}</p>
            <p class="text-gray-700 mb-4">${movie.genres}</p>
            <p class="text-gray-700 mb-4">${movie.overview}</p>
            <ul class="text-gray-700">
            </ul>
          </div>
        </div>
      </div>

      <!-- Filas 1 y 2 (tablas) -->
      <div class="w-full flex flex-row md:w-1/3">
        <div class="mb-4">
          <h3 class="text-lg font-bold text-gray-800 mb-2">Tabla 1</h3>
          <table class="w-full border-collapse border border-gray-200">
            <tbody class="text-gray-700">
              <tr>
                <td class="border border-gray-200 p-2">Fila 1, Columna 1</td>
                <td class="border border-gray-200 p-2">Fila 1, Columna 2</td>
              </tr>
              <tr>
                <td class="border border-gray-200 p-2">Fila 2, Columna 1</td>
                <td class="border border-gray-200 p-2">Fila 2, Columna 2</td>
              </tr>
              <tr>
                <td class="border border-gray-200 p-2">Fila 3, Columna 1</td>
                <td class="border border-gray-200 p-2">Fila 3, Columna 2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 class="text-lg font-bold text-gray-800 mb-2">Tabla 2</h3>
          <table class="w-full border-collapse border border-gray-200">
            <tbody class="text-gray-700">
              <tr>
                <td class="border border-gray-200 p-2">Fila 1, Columna 1</td>
                <td class="border border-gray-200 p-2">Fila 1, Columna 2</td>
              </tr>
              <tr>
                <td class="border border-gray-200 p-2">Fila 2, Columna 1</td>
                <td class="border border-gray-200 p-2">Fila 2, Columna 2</td>
              </tr>
              <tr>
                <td class="border border-gray-200 p-2">Fila 3, Columna 1</td>
                <td class="border border-gray-200 p-2">Fila 3, Columna 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
`
}

