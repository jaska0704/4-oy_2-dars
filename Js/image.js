let profilePic = document.querySelector("#profile-pic");
let inputFile = document.querySelector("#input-file");
let btn = document.querySelector("#btn")
let hero = document.querySelector(".hero")
let img = document.querySelector("img");
let deleteInput = document.querySelector("#delete");
inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};

btn.addEventListener("click", () => {
  if (img["src"].includes("profil")) {
    hero.style["display"] = "flex";
    alert("Iltimos rasm kiriting!")
  } else {
    hero.style["display"] = "none";
  }

 
  
})

deleteInput.addEventListener("click", () => {
if()

})
