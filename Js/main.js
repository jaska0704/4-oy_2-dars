let burger = document.querySelector(".burger");
let masalliq = document.querySelector(".masalliq");
let cheese = document.querySelector(".btn-ch");
let meat = document.querySelector(".btn-m");
let onion = document.querySelector(".btn-o");
let salad = document.querySelector(".btn-s");
let tomato = document.querySelector(".btn-t");
let pickle = document.querySelector(".btn-p");
let select = document.querySelector("#language");
const allLang = ['en', 'ru', 'uz'];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage() {
    let hash =window.location.hash;
    hash = hash.substring(1);
    if (!allLang.includes(hash)) {
         location.href = window.location.pathname + "#uz";
         location.reload();
    }
    select.value = hash;
    // document.querySelector("title").innerHTML = langArr['tileLang'][hash];
}
changeLanguage();
console.log(langArr["tileLang"]);



cheese.addEventListener("click", (e) => {
  e.preventDefault();
  const sir = document.createElement("div");
  sir.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/cheese.svg" alt="cheese" />`;
  sir.style.height = "30px";
  sir.style.zIndex = "7";
  masalliq.prepend(sir);
  hisob += 2;
  total.textContent = `Total:  ${hisob}$ dollar`;
  sir.addEventListener("click", (e) => {
    sir.innerHTML = "";
    masalliq.removeChild(sir);
    hisob -= 2;
    total.textContent = `Total:  ${hisob}$ dollar`;
  });
});
meat.addEventListener("click", (e) => {
  e.preventDefault();
  hisob += 5;
  total.textContent = `Total:  ${hisob}$ dollar`;
  const meat = document.createElement("div");
  meat.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/meat.svg" alt="meat" />`;
  meat.style.zIndex = "9";
  meat.style.height = "30px";
  masalliq.prepend(meat);
  meat.addEventListener("click", (e) => {
    meat.innerHTML = "";
    masalliq.removeChild(meat);
    hisob -= 5;
    total.textContent = `Total:  ${hisob}$ dollar`;
  });
});
onion.addEventListener("click", (e) => {
  e.preventDefault();
  const onion = document.createElement("div");
  hisob += 1;
  total.textContent = `Total:  ${hisob}$ dollar`;
  onion.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/onion.svg" alt="onion" />`;
  masalliq.prepend(onion);
  onion.style.height = "25px";
  onion.style.zIndex = "-9";
  onion.addEventListener("click", (e) => {
    onion.innerHTML = "";
    masalliq.removeChild(onion);
    hisob -= 1;
    total.textContent = `Total:  ${hisob}$ dollar`;
  });
});
salad.addEventListener("click", (e) => {
  e.preventDefault();
  const salad = document.createElement("div");
  hisob += 1;
  total.textContent = `Total:  ${hisob}$ dollar`;
  salad.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/salad.svg" alt="salad" />`;
  masalliq.prepend(salad);
  salad.style.height = "30px";
  salad.style.zIndex = "-1";
  salad.addEventListener("click", (e) => {
    salad.innerHTML = "";
    masalliq.removeChild(salad);
    hisob -= 1;
    total.textContent = `Total:  ${hisob}$ dollar`;
  });
  if(salad < 2){
   return alert("mumkinmas")
  }
});
tomato.addEventListener("click", (e) => {
  e.preventDefault();
  const tomato = document.createElement("div");
  hisob += 2;
  total.textContent = `Total:  ${hisob}$ dollar`;
  tomato.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/tomato.svg" alt="tomato" />`;
  masalliq.prepend(tomato);
  tomato.style.height = "30px";
  tomato.style.zIndex = "2";
  tomato.addEventListener("click", (e) => {
    tomato.innerHTML = "";
    masalliq.removeChild(tomato);
    hisob -= 2;
    total.textContent = `Total:  ${hisob}$ dollar`;
  });
});
pickle.addEventListener("click", (e) => {
  e.preventDefault();
  const pickle = document.createElement("div");
  hisob += 3;
  total.textContent = `Total:  ${hisob}$ dollar`;
  pickle.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/pickle.svg" alt="" />`;
  masalliq.prepend(pickle);
  pickle.style.height = "25px";
  pickle.style.zIndex = "1";
  pickle.addEventListener("click", (e) => {
    pickle.innerHTML = "";
    masalliq.removeChild(pickle);
    hisob -= 3;
    total.textContent = `Total:  ${hisob}$ dollar`;
  });
  
});
let hisob = 2;
let total = document.querySelector(".total");
total.textContent = `Total:  ${hisob}$ dollar`;
let retry = document.getElementById("retry");
let queue = document.querySelector(".queue");
retry.addEventListener("click", (e) => {
  e.preventDefault();
  masalliq.innerHTML = "";
  hisob = 2;
  total.textContent = `Total:  ${hisob}$ dollar`;
  queue.innerHTML = "";
});
let send = document.querySelector(".send");
send.addEventListener("click", (e) => {
  e.preventDefault();
  let random = Math.floor(Math.random() * 25) + 10;
  queue.innerHTML = `Your queue is ${random}`;
});

