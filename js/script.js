const url = 'https://akabab.github.io/starwars-api/api/';
const path = 'all.json'
const main = document.querySelector('main');
const head = document.createElement('div');
const info = document.createElement('div');
const header = document.querySelector("header");
info.classList.add('info');
head.classList.add('head');
main.appendChild(head);
head.appendChild(info);
const delay = 1000;
const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".menu-links");
const overlay = document.querySelector(".overlay");
const loader = document.getElementById("loader");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("reveal");
});

    const getPeople = async () => {
        loader.classList.add("hide");
        loader.classList.remove("show");
        try {
          const res = await fetch(url + path);
          if (!res.ok) {
            throw new Error('Error fetching data');
          }
          const data = await res.json();
          for (let i = 0; i < data.length; i++) {
            const character = data[i];
            const res = await fetch(character.image);
            if (!res.ok) {
              info.innerHTML = `Skipped character ${character.name} due to image fetching error <a class="viewSkipped" href="./pages/skipped.html">View Skipped</a>`;
              continue;
            }
            const card = document.createElement('a');
            card.classList.add('card');
            card.href = `./pages/details.html?id=${character.id}`;
            card.innerHTML += 
            `<div class="character">
                <h1 class="characterName">${character.id}. ${character.name}</h1>
                <div class="image_wrapper">
                  <img class="imageel" src="${character.image}">
                </div>
              </div>`;
            head.appendChild(card)
          }
        } catch (error) {
          console.error(error);
          loader.classList.remove("show");
          loader.classList.add("hide");
        }
      };
      setTimeout(() => {getPeople()}, delay);
