document.addEventListener("DOMContentLoaded", (event) => {
  const htmlElement = document.documentElement;
  const switchElement = document.getElementById("darkModeSwitch");

  // Set the default theme to dark if no setting is found in local storage
  const currentTheme = localStorage.getItem("bsTheme") || "dark";
  htmlElement.setAttribute("data-bs-theme", currentTheme);
  switchElement.checked = currentTheme === "dark";

  switchElement.addEventListener("change", function () {
    if (this.checked) {
      htmlElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("bsTheme", "dark");
    } else {
      htmlElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("bsTheme", "light");
    }
  });
});

const pelicula = document.querySelectortor(".col-md-3");
const portada = document.querySelector("");

const foto = portada.value.trim();

// const buscar = document.querySelector("#btn-form");
// const pelicula = document.querySelector("#peli");
// const cartelera = document.querySelector("#content");

// function buscarPelicula() {
//   const title = pelicula.value.trim();
//   if (title === "") {
//     cartelera.innerHTML = "<p>Introduzca un título</p>";
//     return;
//   }

//   const url = `https://private.omdbapi.com/?apikey=bef9c583&t=${encodeURIComponent(
//     title
//   )}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((info) => {
//       if (info.Response === "True") {
//         let ratings = "";
//         for (let i = 0; i < info.Ratings.length; i++) {
//           const rating = info.Ratings[i];
//           ratings += `<li>${rating.Source}: ${rating.Value}</li>`;
//         }

//         cartelera.innerHTML = `
//           <img src="${info.Poster}" alt="Poster de ${info.Title}" />
//           <h2>${info.Title}</h2>
//           <p><strong>Género:</strong> ${info.Genre}</p>
//           <p><strong>Idioma:</strong> ${info.Language}</p>
//           <p><strong>Director:</strong> ${info.Director}</p>
//           <p><strong>Sinopsis:</strong> ${info.Plot}</p>
//           <p><strong>Actores:</strong> ${info.Actors}</p>
//           <p><strong>País:</strong> ${info.Country}</p>
//           <p><strong>Premios:</strong> ${info.Awards}</p>
//           <p><strong>Metascore:</strong> ${info.Metascore}</p>
//           <p><strong>Ratings:</strong></p>
//           <ul>${ratings}</ul>
//         `;
//       } else {
//         cartelera.innerHTML = `
//           <p>No se encontraron resultados para tu búsqueda. Intenta con diferentes palabras clave o revisa si hay errores de escritura</p>
//         `;
//       }
//     })
//     .catch((error) => {
//       cartelera.innerHTML =
//         "<p>Parece que hubo un error y no se pudo conectar con el servidor. Por favor, intenta más tarde.</p>";
//       console.error("Error de conexión o de servidor:", error);
//     });
// }

// buscar.addEventListener("click", buscarPelicula);
// ignore eso
// pelicula.addEventListener("keydown", function(enter) {
//   if(enter.key === "Enter"){
//     buscarPelicula();
//   }

// });
