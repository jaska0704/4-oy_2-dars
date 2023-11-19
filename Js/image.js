let profilePic = document.querySelector("#profile-pic");
let inputFile = document.querySelector("#input-file");
let btn = document.querySelector("#btn")
let hero = document.querySelector(".hero")
let input = document.querySelector("input")

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};

btn.addEventListener("click", () => {
  if(input in profilePic){
    hero.style["display"] = "block"
  } else{
     hero.style["display"] = "none";
  }
})