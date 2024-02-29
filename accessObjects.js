const pupInfo = {
  pupName: "Buddy",
  age: 1,
  favFood: "popcorn",
  favActivity: "fetch"
}

// 1. When we click the button, it doesn't show our info! 
//  - Using dot notation, include the appropriate values from our object. 
//  - We're inserting JS into our HTML using string interpolation.
//  - Remeber to wrap the values in a $ and curly braces! 

document.querySelector("button").addEventListener("click", () => {
    document.querySelector(".info").innerHTML = 
    `<p>This is ${pupInfo.pupName}! 
    They are ${pupInfo.age} months old and love to eat ${pupInfo.favFood}. 
    Their favorite thing to do is ${pupInfo.favActivity}. 
    They're perfect.</p>`
  })
  