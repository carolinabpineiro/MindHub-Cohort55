
const verMas = document.getElementById('verMas');
let detailsMovie = window.location.search;
let urlParams = new URLSearchParams(detailsMovie);

console.log(urlParams)
console.log(detailsMovie)

if(urlParams.has('id')){
  let movie = movies.find((movie) => movie.id == urlParams.get('id'))
console.log(movie);
verMas.innerHTML =`
<div class="container mx-auto p-8 bg-white rounded-lg shadow-lg flex flex-col items-center">
    <div class="mb-4 text-center">
        <h1 class="text-3xl font-bold text-gray-800">${movie.title}</h1>
    </div>
    <div class="flex flex-wrap gap-4 w-full">
        <div class="w-full md:w-2/3 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
            <img src="${movie.image}" alt="Imagen de la película" class="w-full h-auto object-cover rounded-lg mb-4 md:w-1/2">


            <div class="flex-1 text-center md:text-left">
                <h3 class="text-lg font-bold text-gray-800 mb-2">Descripción:</h3>
                <p class="text-gray-600 mb-4">${movie.tagline}</p>
                <h3 class="text-lg font-bold text-gray-800 mb-2">Géneros:</h3>
                <p class="text-gray-700 mb-4">${movie.genres.join(", ")}</p>
                <h3 class="text-lg font-bold text-gray-800 mb-2">Resumen:</h3>
                <p class="text-gray-700 mb-4">${movie.overview}</p>
            </div>
        </div>

        <div class="w-full md:w-1/3 flex flex-col md:flex-row gap-4">
            <div class="w-full mb-8 md:w-1/2">
                <table class="w-full border-collapse border border-gray-200">
                    <tbody class="text-gray-700">
                        <tr>
                            <td class="border border-gray-200 p-2">Lenguaje original</td>
                            <td class="border border-gray-200 p-2">${movie.original_language}</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2">Fecha de estreno</td>
                            <td class="border border-gray-200 p-2">${movie.release_date}</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2">Duración</td>
                            <td class="border border-gray-200 p-2">${movie.runtime} min</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2">Estado</td>
                            <td class="border border-gray-200 p-2">${movie.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="w-full mb-8 md:w-1/2">
                <table class="w-full border-collapse border border-gray-200">
                    <tbody class="text-gray-700">
                        <tr>
                            <td class="border border-gray-200 p-2">Votos</td>
                            <td class="border border-gray-200 p-2">${movie.vote_average}</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2">Presupuesto</td>
                            <td class="border border-gray-200 p-2">${movie.budget}</td>
                        </tr>
                        <tr>
                            <td class="border border-gray-200 p-2">Ingresos generados</td>
                            <td class="border border-gray-200 p-2">${movie.revenue}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>


`
}

