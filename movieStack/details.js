
  /*console.log(id);

  function obtenerPeliculaPorId(id) {
    
    return movies.find(movie => movie.id === id);
  }

  function mostrarDetalles(movie) {
    // Aquí puedes construir y mostrar el detalle de la película en el DOM
    const detallePelicula = document.getElementById('detalleMovie');
    if (movie) {
      detallePelicula.innerHTML = `
        <h2>${movie.title}</h2>
        <p><strong>Tagline:</strong> ${movie.tagline}</p>
        <p><strong>Genero/s:</strong> ${movie.genres}</p>
        <!-- Agrega más detalles según sea necesario -->
      `;
    } else {
      detallePelicula.innerHTML = '<p>No se encontró la película.</p>';
    }
  }*/


// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Escuchar cambios en el selector de películas
    let detallePeliculas = document.getElementById('verMas');
    detallePeliculas.addEventListener('change', function() {
      // Obtener el valor seleccionado (que sería el id)
      const id = detallePeliculas.value;
      console.log('Seleccionaste la película con id:', id);
      
      // Aquí puedes llamar a una función para cargar detalles basados en el id seleccionado
      cargarDetalles(id);
    });
  });
  
  function cargarDetalles(id) {
    // Aquí puedes implementar la lógica para cargar detalles de la película con el id proporcionado
    console.log('Cargando detalles para la película con id:', id);
    // Ejemplo ficticio de solicitud AJAX
    /*
    fetch(`https://api.example.com/peliculas/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log('Detalles cargados:', data);
        // Aquí puedes actualizar la interfaz de usuario con los detalles cargados
      })
      .catch(error => console.error('Error al cargar detalles:', error));
    */
  }
  