
const nasa1 = document.querySelector(".nasa1");
const explication = document.querySelector(".detail");
const imageTexte = document.querySelector(".imgText");
const image = document.querySelector(".img");


const api = "wVFgJbKMy3w572mhbYv39N9r1YgW1zfCaDUClwOO";

let day = new Date()

let dataDay = [];

async function getNasa() {

    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api}`);
    let data = await response.json();
    console.log(data);
    dataDay = data;
    nasa1.innerText = dataDay.date.split();
    explication.textContent = dataDay.explanation;
    imageTexte.textContent = dataDay.title;
    image.src = dataDay.url;

  

}

getNasa();






