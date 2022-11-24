const api = {
  key: "Wgd6L6VWwwdXtnZfPF9934z0vGDYsDIu",
  url: `https://api.giphy.com/v1/gifs/search?api_key=`,
};

const city = document.getElementById("gifs");

async function search(query) {
  try {
    const response = await fetch(
      `${api.url}${api.key}&q=${query}&limit=25&offset=0&rating=g&lang=en`
    );
    const data = await response.json();
    console.log(data);

    gifs.innerHTML = " ";

    for (i = 0; i < data.data.length; i++) {
      gifs.innerHTML += `<div class="tarjeta">
  
    ${data.data[i].title}<br>
    <img src = "${data.data[i].images.downsized_medium.url}"></img><br>
  
<div>`;
    }
  } catch (err) {
    console.log(err);
    alert("Hubo un error");
  }
}

function onSubmit(event) {
  event.preventDefault();
  search(searchbox.value);
}

const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("searchbox");
searchform.addEventListener("submit", onSubmit, true);
