let contenedor = document.getElementById("contenedor");
console.log(contenedor);

function estructuraCard(movie) {
  return `<div>
            <div class="flex flex-wrap flex-row w-80 h-auto bg-white rounded-lg shadow-lg overflow-hidden gap-3">
                <!-- Card Image -->
                <img class="w-full h-48 object-cover" src="${movie.image}" alt="Card Image">
                
                <!-- Card Content -->
                <div class="p-4 text-center">
                    <div class="flex justify-center items-center">
                        <h2 class="text-xl font-bold w-full text-gray-800 mb-2 justify-center">${movie.title}</h2>
                        <span class="text-sm text-gray-500">${movie.tagline}</span>
                    </div>
                    <p class="text-gray-700 mb-4 text-overflow: ellipsis">${movie.overview}</p>
                  
            </div>

      

        </div>
    </div>
    
    `;
}
console.log(estructuraCard);

function imprimirCardHtml(listaMovies) {
  let cards = "";
  for (const movie of listaMovies) {
    cards += estructuraCard(movie
    );
  }
  contenedor.innerHTML = cards;
}
console.log(imprimirCardHtml(movies));

imprimirCardHtml (movies);
