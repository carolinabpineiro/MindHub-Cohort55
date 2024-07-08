let contenedor = document.getElementById("contenedor");
console.log(contenedor);

function estructuraCard(image, title, tagline, overview) {
  return `<div>
            <div class="flex flex-wrap flex-row w-80 h-auto bg-white rounded-lg shadow-lg overflow-hidden gap-3">
                <!-- Card Image -->
                <img class="w-full h-48 object-cover" src="${image}" alt="Card Image">
                
                <!-- Card Content -->
                <div class="p-4 text-center">
                    <div class="flex justify-center items-center">
                        <h2 class="text-xl font-bold w-full text-gray-800 mb-2 justify-center">${title}</h2>
                        <span class="text-sm text-gray-500">${tagline}</span>
                    </div>
                    <p class="text-gray-700 mb-4 text-overflow: ellipsis">${overview}</p>
                  
            </div>

      

        </div>
    </div>
    
    `;
}
console.log(estructuraCard);

function imprimirCard(listaMovies) {
  let cards = "";
  for (const movie of listaMovies) {
    cards += estructuraCard(
      movie.image,
      movie.title,
      movie.tagline,
      movie.overview
    );
  }
  return cards;
}
console.log(imprimirCard(movies));

contenedor.innerHTML = imprimirCard(movies);
