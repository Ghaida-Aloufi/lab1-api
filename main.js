



let url1 = "https://coffee.alexflipnote.dev/random.json";

let counter = document.getElementById("counter");

function fetchAndDisplayImage() {

fetch(url1)
  .then((res) => res.json())  // Make sure to return the result of res.json()
  .then((data) => {
    counter.innerHTML=" "
    console.log(data);

    let img = document.createElement("img");
    img.src = data.file;
    counter.appendChild(img);
  })

}
  setInterval(fetchAndDisplayImage, 3000);


  