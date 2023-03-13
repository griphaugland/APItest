const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const main = document.querySelector('main');
const id = params.get('id');
console.log('id:', id);
const head = document.createElement('div');
const info = document.createElement('div');
const header = document.querySelector("header");
info.classList.add('info');
head.classList.add('head');
main.appendChild(head);
head.appendChild(info);
const delay = 1000;
const loader = document.getElementById("loader");

  const getPeople = async () => {
    loader.classList.add("hide");
    loader.classList.remove("show");
fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`)
.then((res) => {
    console.log(res);
    return res.json();
}) 
.then((data) => {
    const homeworld = data.homeworld ? `${data.homeworld.charAt(0).toUpperCase()}${data.homeworld.slice(1)}` : 'Unknown';
    const species = data.species ? `${data.species.charAt(0).toUpperCase()}${data.species.slice(1)}` : 'Unknown';
    const gender = data.gender ? `${data.gender.charAt(0).toUpperCase()}${data.gender.slice(1)}` : 'Unknown';
    const eyeColor = data.eyeColor ? `${data.eyeColor.charAt(0).toUpperCase()}${data.eyeColor.slice(1)}` : 'Unknown'
    const skinColor = data.skinColor ? `${data.skinColor.charAt(0).toUpperCase()}${data.skinColor.slice(1)}` : 'Unknown'
    main.innerHTML = 
        `<div class="shell">
        <div class="return"><a href="../index.html"><i class="fa-solid fa-arrow-left"></i></a></div>
            <h1 class="characterName">${data.name.charAt(0).toUpperCase()}${data.name.slice(1)}</h1>
           <div class="container"> 
                <div class="list"> 
                <p class="birthYear">Born: ${data.born}</p> <p class="homeworld">Home world: ${homeworld}</p> 
                <p class="characterMass">Weight: ${data.mass}kg </p> <p class="characterHeight">Height: ${data.height}m </p> 
                </div>
                <div class="list2">
                <p class="gender">Gender: ${gender} </p> <p class="eyeColor">Eye Color: ${eyeColor} </p> 
                <p class="skinColor">Skin Color: ${skinColor} </p> <p class="species">Species: ${species} </p> 
                </div>
                <div class="info"></div>
                <div class="image_wrapper">
                 <img class="imageel" src="${data.image}">
                 </div>
             </div>      
        </div>`
    
    console.log(data);
});}
setTimeout(() => {getPeople()}, delay);