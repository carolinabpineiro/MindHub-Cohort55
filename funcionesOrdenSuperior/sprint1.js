//1. Convierta la siguiente función nombrada en una función de flecha :

function printMessage(mensaje) {
    console.log(mensaje);
}

// Función de flecha
const printMessageArrow = (mensaje) => {
    console.log(mensaje);
};


printMessage("Hola mundo");
printMessageArrow("Hola mundo con función de flecha");


//2. Convierta la siguiente función nombrada en una función de flecha :

function createMultplication (numero1, numero2) {

    let resultado = numero1 * numero2;
 
     return resultado
 
 }
 
 let crarMulti = (numero1, numero2) =>{
     let resultado = (numero1*numero2);
     return resultado;
     
 }
 
 console.log(createMultplication(10,10));
 console.log(crarMulti(10,10));
 
 

//3. Partiendo de un array: const array = [ 1,2,3,4,5,6,7,8,9 ], aplicar un map a ese array y pasar como argumento la función nombrada mostrada en el ejercicio anterior. Mostrar por consola el nuevo array obtenido.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = array.map((element) => {
    printMessageArrow(`El número es: ${element}`);
    return element;
});

// Mostrar por consola el nuevo array obtenido
console.log(newArray);



//4. Generar una función que reciba un array de cervezas como parámetro y devuelva un nuevo array con las 10 cervezas con mayor contenido de alcohol.

const cervezasArray = beers;

function obtenerTopCervezasAlcohol(cervezasArray) {
    // Ordenar el array de cervezas por contenido de alcohol (abv) de mayor a menor
    const cervezasOrdenadas = cervezasArray.sort((a, b) => b.abv - a.abv);
    
    // Tomar las primeras 10 cervezas del array ordenado
    const topCervezas = cervezasOrdenadas.slice(0, 10);
    
    return topCervezas;
}

console.log(obtenerTopCervezasAlcohol(cervezasArray));

//5. Generar una función que reciba un array de cervezas como parámetro y devuelva un nuevo array con las 10 cervezas menos amargas.

function obtenerCervezasMenosAmargas(cervezas) {
    // Ordenar el array de cervezas por amargura (ibu) de menor a mayor
    const cervezasOrdenadas = cervezas.sort((a, b) => a.ibu - b.ibu);
    
    // Tomar las primeras 10 cervezas del array ordenado
    const menosAmargas = cervezasOrdenadas.slice(0, 10);
    
    return menosAmargas;
}

console.log(obtenerCervezasMenosAmargas(cervezasArray));

//6. Generar una función que reciba como parámetros un array de cervezas y el nombre de una cerveza. La función debe devolver el objeto completo que coincida con el nombre ingresado.

function buscarCervezaPorNombre(cervezas, nombreCerveza) {
    // Utilizamos el método find() para buscar el primer objeto que cumpla la condición
    const cervezaEncontrada = cervezas.find(cerveza => cerveza.name === nombreCerveza);
    
    // Devolvemos el objeto encontrado, o null si no se encontró ninguna coincidencia
    return cervezaEncontrada;
}

console.log(buscarCervezaPorNombre(beers, "Buzz"));
console.log(buscarCervezaPorNombre(beers, "Trashy Blonde"));
console.log(buscarCervezaPorNombre(beers, "Pilsen Lager"));

//7. Generar una función que reciba como parámetro un array de cervezas, un valor y que retorne el primer objeto cuya propiedad ibu sea igual al valor ingresado, en caso de que no exista una cerveza con ese ibu que muestre un mensaje en la consola que diga “No existe ninguna cerveza con un ibu de (valor ingresado)”.

function buscarCervezaPorIBU(cervezas, valorIBU) {
    const cervezaEncontrada2 = cervezas.find(cerveza => cerveza.ibu === valorIBU);
    
    if (cervezaEncontrada2) {
        return cervezaEncontrada2;
    } else {
        console.log(`No existe ninguna cerveza con un ibu de ${valorIBU}.`);
        return null; // Opcional: puedes devolver `undefined` o `null` según tu preferencia.
    }
}


console.log(buscarCervezaPorIBU(beers, 60));


//8. Generar una función que reciba como parámetro el nombre de una cerveza y devuelva la posición en el array de dicha cerveza. Si no se encuentra la cerveza se debe imprimir un mensaje por consola que diga “(Nombre de la cerveza ingresada) no existe”.

let beerByIndex = (beers, name) => {
    let beerIndex = beers.findIndex((beer) => beer.name === name);
    if (beerIndex !== -1) {
      console.log(`La posición de la cerveza ${name} es ${beerIndex}`);
    } else {
      console.log(`La cerveza ${name} ingresada no existe`);
    }
    return beerIndex;
  };
  console.log(beers);
  beerByIndex(beers, "Buzz");

//9. Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no superan el nivel de alcohol. Cada elemento del nuevo array debe ser un objeto que tenga las propiedades nombre, alcohol (abv) y "amargura" (ibu)
let filtrarCerveza = (beer, valueAbv) => {
    let filteredBeers = beer.filter((beer) => beer.abv <= valueAbv);
    if (filteredBeers.length > 0) {
      return filteredBeers.map((beer) => ({
        name: beer.name,
        abv: beer.abv,
        ibu: beer.ibu,
      }));
    } else {
      return (`No existe ninguna cerveza con un valor Abv menor o igual a ${valueAbv}`);
    }
};
console.log(filtrarCerveza(beers, 5));

//10. Generar una función que reciba como parámetros un array de cervezas, un nombre de propiedad y un valor booleano. Deberá devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, en orden ascendente si la tercera es verdadera o descendente si es falsa.

let cervezasOrdenadas = (beers, property, boolean) => {
    let ordered = beers
      .filter((beer) => beer[property])
      .toSorted((a, b) => {
        if (a[property] < b[property]) {
          return -1;
        }
        else if (a[property] > b[property]) {
          return 1;
        }
        return 0;
      });
    if (boolean) {
      return ordered.slice(0, 10);
    }
    return ordered.reverse().slice(0, 10);
  }
  console.log(cervezasOrdenadas(beers, "abv", true));
  console.log(cervezasOrdenadas(beers, "abv", false));

//11. Generar una función que reciba como parámetro un array de cervezas y un id de un elemento HTML donde se imprimirá la tabla. La función debe renderizar (renderizar, dibujar, pintar, rellenar, etc.) en un archivo html una tabla que contenga las columnas “Nombre”, “ABV”, “IBU”, y una fila por cada elemento del array. Cada fila debe tener los datos solicitados para cada una de las cervezas.

function renderTable(beerArray, tableId) {
  const tableBody = document.getElementById(tableId);

  // Limpiar el contenido previo de la tabla, si es necesario
  tableBody.innerHTML = '';

  // Crear las filas y celdas de la tabla
  beerArray.forEach(beer => {
    let row = document.createElement('tr');

    let nameCell = document.createElement('td');
    nameCell.textContent = beer.name;

    let abvCell = document.createElement('td');
    abvCell.textContent = beer.abv;

    let ibuCell = document.createElement('td');
    ibuCell.textContent = beer.ibu;

    // Agregar las celdas a la fila
    row.appendChild(nameCell);
    row.appendChild(abvCell);
    row.appendChild(ibuCell);

    // Agregar la fila al cuerpo de la tabla
    tableBody.appendChild(row);
  });
}

renderTable(beers, 'beerTable');