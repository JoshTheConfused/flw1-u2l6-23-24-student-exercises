const favs = {
  artist: "Céline Dion",
  food: "pho",
  animal: "wombat",
  number: 37
};

// 1. Change 'favs' values to your own using dot notation.
// 2. Add at least 2 additional favorites (e.g. movie, tv show, videogame) to the object `favs` using dot notation.
// 3. Be sure to click 'Run' to see your changes.
favs.artist = "Bob Dylan";
favs.food = "Sushi";
favs.animal = "Orca";
favs.number = 10;

// CHALLENGE
// Look up object destructuring - you can also go to this link: https://www.w3schools.com/react/react_es6_destructuring.asp
//  - See if you can save the properties of the object intro separate variables using this.
const {artist, food, animal, number} = favs;
console.log(artist);
console.log(food);
console.log(animal);
console.log(number);


// DON'T CHANGE THIS CODE
for (let key in favs) {
    let para = document.createElement("p");
    para.innerHTML = `${key}: ${favs[key]}`
    document.querySelector(".favs").appendChild(para)
}