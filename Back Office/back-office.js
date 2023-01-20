const url = "https://striveschool-api.herokuapp.com/api/movies";

const handleSubmitMovie = async (submitevent) => {
  try {
    submitevent.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const imageUrl = document.getElementById("imageUrl").value;

    const newMovie = { name, description, category, imageUrl };
    const options = {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
      }),
    };

    let response = await fetch(url, options);
    console.log(response);
    if (response.ok) {
      successAlert();
    } else {
      throw response.status + " " + response.statusText;
    }
  } catch (error) {
    console.error(error);
  }
};

const successAlert = () => {
  const alert = document.querySelector(".alert-success");
  alert.classList.add("show");
  alert.classList.remove("d-none");
};
