const url = "https://striveschool-api.herokuapp.com/api/movies";
const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id"); //this can either an id or null
console.log(id);
const userId = params.get("userId");

window.onload = async () => {
  try {
    if (id !== null) {
      const submitBtn = document.querySelector(".btn.btn-outline-dark");
      submitBtn.remove();

      let response = await fetch(url + "/" + id, {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
        }),
      });
      if (response.ok) {
        let { name, description, category, imageUrl } = await response.json();
        document.getElementById("name").value = name;
        document.getElementById("description").value = description;
        document.getElementById("category").value = category;
        document.getElementById("imageUrl").value = imageUrl;
        console.log("res2", response);
      } else {
        throw response.status + " " + response.statusText;
      }
    } else {
      const putButton = document.querySelector(".btn.btn-secondary");
      putButton.remove();

      //   const deleteBtn = document.querySelector(".btn.btn-danger");
      //   deleteBtn.remove();
    }
  } catch (error) {
    console.error(error);
  }
};

const handleSubmitMovie = async (submitevent) => {
  try {
    // submitevent.preventDefault();
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
    console.log("res", response);
    if (response.ok) {
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      document.getElementById("category").value = "Horror";
      document.getElementById("imageUrl").value = "";
      //   successAlert();
    } else {
      throw response.status + " " + response.statusText;
    }
  } catch (error) {
    console.error(error);
  }
};

const handleEdit = async (editevent) => {
  try {
    editevent.preventDefault();
    const editMovie = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      category: document.getElementById("category").value,
      imageUrl: document.getElementById("imageUrl").value,
    };
    // const genres = ["Horror", "Thriller", "Romantic", "Crime"];
    // for (const genere of genres) {
    //   const response = await fetch(url + "/" + genere + id, {
    //     method: "PUT",
    //     body: JSON.stringify(editMovie),
    //     headers: new Headers({
    //       "Content-Type": "application/json",
    //       Authorization:
    //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
    //     }),
    //   });
    // }
    let response = await fetch(url + "/" + id, {
      method: "PUT",
      body: JSON.stringify(editMovie),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
      }),
    });
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      successAlert();
    } else {
      throw response.status + " " + response.statusText;
    }
  } catch (error) {
    console.error(error);
  }
};

const deleteEvent = async () => {
  try {
    let response = await fetch(url + "/" + id, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NhNzFlYjE3ZWE3ODAwMTUyZWJlYmIiLCJpYXQiOjE2NzQyMTE4MjAsImV4cCI6MTY3NTQyMTQyMH0.0-NssUu9Qo7TA-VtfPylpWHT1WSJyFLfB3cM-tUO3uo",
      }),
    });

    if (response.ok) {
      const parsedBody = await response.json();
      console.log("delete", parsedBody);
      window.location.reload();
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      document.getElementById("category").value = "Horror";
      document.getElementById("imageUrl").value = "";
      //   handleSubmitMovie(movieIdDelete);
      //   successAlert();
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
