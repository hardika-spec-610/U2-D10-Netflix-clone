const url = "https://striveschool-api.herokuapp.com/api/movies";

window.onload = async () => {
  //   await getMovies();
  await getHorrorMovie();
  await getThrillerMovie();
  await getRomanticMovie();
  await getCrimeMovie();
};

// const getMovies = async () => {
//   try {
//     const options = {
//       method: "GET",
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
//       },
//     };
//     const genres = ["Horror", "Thriller", "Romantic", "Crime"];
//     for (const genere of genres) {
//       const response = await fetch(url + "/" + genere, options);
//       const movieArray = await response.json();
//       console.log("movies", movieArray);
//       renderMovie(movieArray);
//     }
//   } catch (error) {
//     //   handleError(error)
//     console.error(error);
//   }
// };

const getHorrorMovie = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
      },
    };

    const response = await fetch(url + "/Horror", options);
    const movieArray = await response.json();
    console.log("movies", movieArray);
    renderMovie(movieArray);
  } catch (error) {
    console.error(error);
  }
};
const getThrillerMovie = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
      },
    };

    const response = await fetch(url + "/Thriller", options);
    const movieArray = await response.json();
    console.log("movies", movieArray);
    renderMovie(movieArray);
  } catch (error) {
    console.error(error);
  }
};
const getRomanticMovie = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
      },
    };

    const response = await fetch(url + "/Romantic", options);
    const movieArray = await response.json();
    console.log("movies", movieArray);
    renderMovie(movieArray);
  } catch (error) {
    console.error(error);
  }
};
const getCrimeMovie = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
      },
    };

    const response = await fetch(url + "/Crime", options);
    const movieArray = await response.json();
    console.log("movies", movieArray);
    renderMovie(movieArray);
  } catch (error) {
    console.error(error);
  }
};

const renderMovie = (arrayOfMovies) => {
  const movieRow = document.getElementById("movie-row");
  // movieRow.innerHTML = "";
  arrayOfMovies.forEach((singleMovie) => {
    const { name, description, imageUrl, category, _id, userId } = singleMovie;
    movieRow.innerHTML += `
            <div class="col-12 py-3 col-sm-6 py-sm-2 col-md-4 py-md-2 col-lg-2 px-1 ">
                <div class="movie-card">
                    <img class="w-100" src=${imageUrl} alt=${name} width=350px height=200px />
                    <div class="infos-container">
                      <div class="d-flex mb-3 mt-4 align-items-center">
                        <i class="bi bi-play-circle mr-2 " ></i>
                        <span>Play S8 E7</span>
                        <i class="bi bi-plus-lg ml-auto plus-btn"></i>
                      </div>
                      <h6 class="pime-title">${name}</h6>
                     
                      <p>
                        ${description}
                      </p>
                      <div class="card-movie-footer d-flex align-items-center">
                        <span class="mr-2">${category}</span>
                        <span class="mr-2">2012</span>
                        <i class="bi bi-chat-square-text mr-2"></i>
                        <div>13+</div>
                      </div>
                      <div class="pt-2">
                        <a href="../Back Office/back-office.html?id=${_id}" class="card-link" style="  text-decoration: underline">Edit</a>
                        <a class=" btn btn-danger py-0 px-1" onclick='deleteMovie("${_id}")' >Delete</a>
                      </div>
                    </div>
                </div>
            </div>`;
  });
};

const deleteMovie = async (idToDelete) => {
  try {
    let response = await fetch(url + "/" + idToDelete, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
      }),
    });
    console.log(response);
    if (response.ok) {
      //   await getMovies();
      window.location.reload();
    }
  } catch (error) {
    console.error(error);
  }
};
