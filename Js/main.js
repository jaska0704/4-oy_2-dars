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
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
         location.href = window.location.pathname + "#uz";
         location.reload();
    }
    select.value = hash;
    for (let key in langArr) {
        let elem = document.querySelector('.lng-' + key);
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}
changeLanguage();

cheese.addEventListener("click", (e) => {
  e.preventDefault();
  const sir = document.createElement("div");
  sir.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/cheese.svg" alt="cheese" />`;
  sir.style.height = "30px";
  sir.style.zIndex = "7";
  masalliq.prepend(sir);
  if(select.value === "uz"){ 
    hisob+=7975
    total.textContent = `Total:  ${hisob} so'm`;
  }else if(select.value === "ru"){
    hisob+= 56.90;
    total.textContent = `Total:  ${hisob} ₽`;
  }else{
    hisob += 0.65;
    total.textContent = `Total:  $${hisob} dollor`;
  }
  
  
  sir.addEventListener("click", (e) => {
    sir.innerHTML = "";
    masalliq.removeChild(sir);
    if (select.value === "uz") {
      hisob -= 7975;
      total.textContent = `Total:  ${hisob} so'm`;
    } else if (select.value === "ru") {
      hisob -= 56.9;
      total.textContent = `Total:  ${hisob} ₽`;
    } else {
      hisob -= 0.65;
      total.textContent = `Total:  $${hisob} dollor`;
    }
  });
});
meat.addEventListener("click", (e) => {
  e.preventDefault();
 if (select.value === "uz") {
   hisob += 14220;
   total.textContent = `Total:  ${hisob} so'm`;
 } else if (select.value === "ru") {
   hisob += 101.55;
   total.textContent = `Total:  ${hisob} ₽`;
 } else {
   hisob += 1.20;
   total.textContent = `Total:  $${hisob} dollor`;
 }
  const meat = document.createElement("div");
  meat.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/meat.svg" alt="meat" />`;
  meat.style.zIndex = "9";
  meat.style.height = "30px";
  masalliq.prepend(meat);
  meat.addEventListener("click", (e) => {
    meat.innerHTML = "";
    masalliq.removeChild(meat);
   if (select.value === "uz") {
     hisob -= 14220;
     total.textContent = `Total:  ${hisob} so'm`;
   } else if (select.value === "ru") {
     hisob -= 101.55;
     total.textContent = `Total:  ${hisob} ₽`;
   } else {
     hisob -= 1.2;
     total.textContent = `Total:  $${hisob} dollor`;
   }
  });
});
onion.addEventListener("click", (e) => {
  e.preventDefault();
  const onion = document.createElement("div");
  if (select.value === "uz") {
    hisob += 3680;
    total.textContent = `Total:  ${hisob} so'm`;
  } else if (select.value === "ru") {
    hisob += 26.28;
    total.textContent = `Total:  ${hisob} ₽`;
  } else {
    hisob += 0.30;
    total.textContent = `Total:  $${hisob} dollor`;
  }
  onion.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/onion.svg" alt="onion" />`;
  masalliq.prepend(onion);
  onion.style.height = "25px";
  onion.style.zIndex = "-9";
  onion.addEventListener("click", (e) => {
    onion.innerHTML = "";
    masalliq.removeChild(onion);
   if (select.value === "uz") {
     hisob -= 3680;
     total.textContent = `Total:  ${hisob} so'm`;
   } else if (select.value === "ru") {
     hisob -= 26.28;
     total.textContent = `Total:  ${hisob} ₽`;
   } else {
     hisob -= 0.3;
     total.textContent = `Total:  $${hisob} dollor`;
   }
  });
});
salad.addEventListener("click", (e) => {
  e.preventDefault();
  const salad = document.createElement("div");
 if (select.value === "uz") {
   hisob += 4908;
   total.textContent = `Total:  ${hisob} so'm`;
 } else if (select.value === "ru") {
   hisob += 35.05;
   total.textContent = `Total:  ${hisob} ₽`;
 } else {
   hisob += 0.4;
   total.textContent = `Total:  $${hisob} dollor`;
 }
  salad.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/salad.svg" alt="salad" />`;
  masalliq.prepend(salad);
  salad.style.height = "30px";
  salad.style.zIndex = "-1";
  salad.addEventListener("click", (e) => {
    salad.innerHTML = "";
    masalliq.removeChild(salad);
   if (select.value === "uz") {
     hisob -= 4908;
     total.textContent = `Total:  ${hisob} so'm`;
   } else if (select.value === "ru") {
     hisob -= 35.05;
     total.textContent = `Total:  ${hisob} ₽`;
   } else {
     hisob -= 0.4;
     total.textContent = `Total:  $${hisob} dollor`;
   }
  });
  if(salad < 2){
   return alert("mumkinmas")
  }
});
tomato.addEventListener("click", (e) => {
  e.preventDefault();
  const tomato = document.createElement("div");
 if (select.value === "uz") {
   hisob += 6135;
   total.textContent = `Total:  ${hisob} so'm`;
 } else if (select.value === "ru") {
   hisob += 43.80;
   total.textContent = `Total:  ${hisob} ₽`;
 } else {
   hisob += 0.5;
   total.textContent = `Total:  $${hisob} dollor`;
 }
  tomato.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/tomato.svg" alt="tomato" />`;
  masalliq.prepend(tomato);
  tomato.style.height = "30px";
  tomato.style.zIndex = "2";
  tomato.addEventListener("click", (e) => {
    tomato.innerHTML = "";
    masalliq.removeChild(tomato);
    if (select.value === "uz") {
      hisob -= 6135;
      total.textContent = `Total:  ${hisob} so'm`;
    } else if (select.value === "ru") {
      hisob -= 43.8;
      total.textContent = `Total:  ${hisob} ₽`;
    } else {
      hisob -= 0.5;
      total.textContent = `Total:  $${hisob} dollor`;
    }
  });
});
pickle.addEventListener("click", (e) => {
  e.preventDefault();
  const pickle = document.createElement("div");
  if (select.value === "uz") {
    hisob += 6135;
    total.textContent = `Total:  ${hisob} so'm`;
  } else if (select.value === "ru") {
    hisob += 43.8;
    total.textContent = `Total:  ${hisob} ₽`;
  } else {
    hisob += 0.5;
    total.textContent = `Total:  $${hisob} dollor`;
  }
  pickle.innerHTML = `<img src="https://mega-burger.netlify.app/burger-layers/pickle.svg" alt="" />`;
  masalliq.prepend(pickle);
  pickle.style.height = "25px";
  pickle.style.zIndex = "1";
  pickle.addEventListener("click", (e) => {
    pickle.innerHTML = "";
    masalliq.removeChild(pickle);
    if (select.value === "uz") {
      hisob -= 6135;
      total.textContent = `Total:  ${hisob} so'm`;
    } else if (select.value === "ru") {
      hisob -= 43.8;
      total.textContent = `Total:  ${hisob} ₽`;
    } else {
      hisob -= 0.5;
      total.textContent = `Total:  $${hisob} dollor`;
    }
  });
  
});
let total = document.querySelector(".total");
let hisob = 0.5;
 if (select.value === "uz") {
   hisob = 6135;
   total.textContent = `Hisob:  ${hisob} so'm`;
 } else if (select.value === "ru") {
   hisob = 43.80;
   total.textContent = `Счёт:  ${hisob} ₽`;
 } else {
   hisob = 0.5;
   total.textContent = `Total:  ${hisob} $`;

 }
  
let retry = document.getElementById("retry");
let queue = document.querySelector(".queue");
retry.addEventListener("click", (e) => {
  e.preventDefault();
  masalliq.innerHTML = "";
 if (select.value === "uz") {
   hisob = 6135;
   total.textContent = `Hisob:  ${hisob} so'm`;
 } else if (select.value === "ru") {
   hisob = 43.8;
   total.textContent = `Счёт:  ${hisob} ₽`;
 } else {
   hisob = 0.5;
   total.textContent = `Total:  ${hisob} $`;
 }
  queue.innerHTML = "";
});
let send = document.querySelector(".send");
send.addEventListener("click", (e) => {
  e.preventDefault();
  let random = Math.floor(Math.random() * 25) + 10;
  if (select.value === "uz") {
     queue.innerHTML = `Buyurtmangiz raqami ${random}`;
  } else if (select.value === "ru") {
     queue.innerHTML = `Ваш номер заказа ${random}`;
  } else {
    queue.innerHTML = `Your queue is ${random}`;
  }
  
});


