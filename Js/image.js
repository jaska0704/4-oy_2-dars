let profilePic = document.querySelector("#profile-pic");
let inputFile = document.querySelector("#input-file");
// let btn = document.querySelector("#btn")
// let hero = document.querySelector(".hero")

// let input = document.querySelector("input")
let btn = document.querySelector("#btn");
let hero = document.querySelector(".hero");
let input = document.querySelector("input");
let img = document.querySelector(".image1");
let img2 = document.querySelector(".image2");
let closeX = document.querySelector(".close")
let h2 = document.querySelector(".text-h2")
let texth2 = document.querySelector(".texth2");

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};

closeX.addEventListener("click", () => {
  hero.style["display"] = "none"
 
  
  
})

btn.addEventListener("click", () => {
  if (img["src"].includes("profil")) {
    hero.style["display"] = "none";
    alert("Iltimos rasm kiriting!");
  } else {
    hero.style["display"] = "none";

    img2["src"] = img["src"] ;
    // h2.textContent = "Your profile pic"

  
    
    console.log(img);
  }
})


// deleteInput.addEventListener("click", () => {
// if()

// })

