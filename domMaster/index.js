//1. Capturar el H1, mediante un ID, en una variable llamada "titulo". 

let h1 = document.getElementById('titulo');   

//2. Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del título por el de esta variable.

let tituloPrincipal = "FRUTAS";

h1.textContent=tituloPrincipal;

//3. Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja. 

let headers = document.getElementsByClassName('cambioColor');
let footers = document.getElementsByClassName('cambioColor');

// Iterar sobre los elementos capturados y aplicar estilos
for (let header of headers) {
    header.style.backgroundColor = 'orange';
}

for (let footer of footers) {
    footer.style.backgroundColor = 'orange';
}

//4. Capturar y modificar el p del footer, agregarle tu nombre completo y cohort. 

let footerP = document.getElementsByClassName('info');

// Como getElementsByClassName devuelve una colección, necesitas iterar sobre ella o acceder al elemento específico si sabes que solo hay uno.
// En este caso, supondrémos que solo hay un elemento con la clase 'info'.

if (footerP.length > 0) {
    // Modificar el contenido del párrafo
    footerP[0].textContent = 'Cohorte 20.03.01 Mindhub. Pineiro Carolina.';
}

//5. Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 

let div = document.createElement('div');
div.id = 'contenedor';

let main = document.getElementsByTagName('main')[0];
main.appendChild(div);


//6. Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos: nombre, foto y descripción). 

function crearCard(nombre, foto, descripcion) {
    // Crear el string de HTML para la card
    let cards = `
        <div class="flex flex-wrap w-56 border-grey-500 border-2 p-2 m-2 rounded shadow-xl">
            <img class="object-cover h-40" src="${foto}" alt="${nombre}">
            <div class="">
                <h3 class="text-center font-bold text-green-800 text-l">${nombre}</h3>
                <p class="text-center">${descripcion}</p>
            </div>
        </div>
    `;

    return cards;
}



//7. Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas, utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).

const arrayFrutas= frutas;
function imprimirFrutas(frutas) {
    let cards = '';
    for (let fruta of arrayFrutas) {
        cards += crearCard(fruta.nombre, fruta.foto, fruta.descripcion);
    }
    return cards;
}


//8. Mostrar las cards con los datos pedidos en el div "#contenedor". 


let cards = imprimirFrutas(frutas);
div.innerHTML = cards;


//9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".
document.addEventListener('DOMContentLoaded', function() {
    // Crear el div "lista" dentro del main
    let divLista = document.createElement('div');
    divLista.id = 'lista';
  
    // Crear el título "Frutas Dulces"
    let tituloFrutasDulces = document.createElement('h2');
    tituloFrutasDulces.textContent = 'Frutas Dulces';
    divLista.appendChild(tituloFrutasDulces);
  
    // Función para crear la lista desordenada de frutas dulces
    function crearListaDesordenada(frutas) {
      // Crear el elemento <ul> para la lista desordenada
      let ul = document.createElement('ul');
  
      // Iterar sobre el array de frutas y crear nodos <li> para las frutas dulces
      frutas.forEach(fruta => {
        if (fruta.esDulce) {
          let li = document.createElement('li');
          li.textContent = fruta.nombre; // Agregar el nombre de la fruta al texto del <li>
          ul.appendChild(li); // Agregar el <li> al <ul>
        }
      });
  
      // Devolver la lista desordenada completa
      return ul;
    }
  
    // Mostrar la lista de frutas dulces en el div "#lista"
    let listaDesordenada = crearListaDesordenada(frutas);
    divLista.appendChild(listaDesordenada);
  
    // Agregar el div "lista" al <main>
    let main = document.querySelector('main');
    main.appendChild(divLista);
  });