let detailsId = document.getElementById("identificadorId")

let locationSrc = location.search    //se accede a url de pagina
let srcParams = new URLSearchParams(locationSrc) //genera obj urlsrc
let idParams = srcParams.get("id")

function crearCarDeDetalle (movie) {
        return `<div class="card mb-3 shadow-lg" style="max-width: 80vw;">
<div class="row g-0">
    <div class="col-md-6 d-flex justify-content-center">
        <img src="${movie.image}" class="img-fluid object-fit-cover rounded-start w-100" alt="Card Image">
    </div>
    <div class="col-md-6 d-md-flex ">
        <div id="detailCard" class="card-body d-flex flex-column justify-content-center gap-4">
            <h2 class="card-title fw-bold display-5">Title: ${movie.title}</h2>
            <ul class="d-flex flex-column gap-3">
                <li>Tagline: ${movie.tagline}</li>
                li>
                    Genres: ${movie.genres.join(", ")}
                </li>
                <li class="card-text">
                Overview: ${movie.overview}</li>
                
            </ul>
        </div>
    </div>
</div>
</div> `

    }
console.log(crearCarDeDetalle)
