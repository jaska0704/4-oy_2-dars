let profilePic = document.querySelector("#profile-pic");
let inputFile = document.querySelector("#input-file");
let btn = document.querySelector("#btn")
let hero = document.querySelector(".hero")
let input = document.querySelector("input")
let img = document.querySelector(".image1");
let img2 = document.querySelector(".image2");
inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};

btn.addEventListener("click", () => {
  if (img["src"].includes("profil")) {
    hero.style["display"] = "flex";
    alert("Iltimos rasm kiriting!")
  } else {
    hero.style["display"] = "none";
    img2["src"] = img["src"];
    console.log(img);
  }
})