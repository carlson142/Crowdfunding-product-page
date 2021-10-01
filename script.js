//BOOKMARK
const btnBookmark = document.getElementById("bookMark");
const bookMName = document.querySelector(".bookmark-name");
const bookMIcon = document.querySelector(".bookM");

//MAIN PAGE BUTTONS
const btnBamboo = document.getElementById("btn-bamboo");
const btnBlackEdition = document.getElementById("btn-blackEdition");
const mainCont = document.getElementById("container");
const header = document.querySelector(".header");

const label2 = document.getElementById("label-2");
const label3 = document.getElementById("label-3");

//BACK THIS PROJECT
const openBack = document.getElementById("backThisProj");
const closeBack = document.querySelector(".closeBack");

const contBack = document.querySelector(".bTP");
const overlay = document.querySelector(".overlay");

const allBtns = document.querySelectorAll(".block__top--label");

const bot1 = document.querySelector(".bot-1");
const block1 = document.querySelector(".block-1");

const bot2 = document.querySelector(".bot-2");
const block2 = document.querySelector(".block-2");

const bot3 = document.querySelector(".bot-3");
const block3 = document.querySelector(".block-3");

const btn1 = document.getElementById("btn-bot1");
const btn2 = document.getElementById("btn-bot2");
const btn3 = document.getElementById("btn-bot3");

const inp2 = document.getElementById("input2");
const inp3 = document.getElementById("input3");

const pl2 = document.getElementById("pledge2");
const pl3 = document.getElementById("pledge3");

// THANKS FOR SUPPORT
const contThanks = document.querySelector(".tFUS");
const btnThanks = document.getElementById("btnThanksForSup");

const totalPeople = document.getElementById("total-people");
const totalMoney = document.getElementById("total-money");
const progressBar = document.getElementById("progressBar");

// MOBILE MENU
const mobMenuIcon = document.getElementById("mobileMenu");
const mobCloseIcon = document.getElementById("mobileMenuClose");

const mobMenuCont = document.querySelector(".mobMenuContainer");

///////////////////////////////////////////////////////////////
//FUNCTIONS
function bookmarkActive() {
  bookMName.textContent = "Bookmarked";
  bookMName.style.color = "hsl(176, 72%, 28%)";
  bookMIcon.style.fill = "white";
  bookMIcon.style.backgroundColor = "hsl(176, 72%, 28%)";
}

function bookmarkOff() {
  bookMName.textContent = "Bookmark";
  bookMName.style.color = "hsl(0, 0%, 48%)";
  bookMIcon.style.fill = "rgb(196, 196, 196)";
  bookMIcon.style.backgroundColor = "black";
}

//MODAL
function openModal(top = 25) {
  overlay.classList.remove("hidden");
  contBack.classList.remove("hidden");
}

function closeModal() {
  overlay.classList.add("hidden");
  contBack.classList.add("hidden");
}

//BTP
function selected(bot, block) {
  bot.classList.add("active");
  block.style.border = "2px solid hsl(176, 50%, 47%)";
}

function unselected(bot1, bot2, block1, block2) {
  bot1.classList.remove("active");
  bot2.classList.remove("active");
  block1.style.border = "2px solid rgb(224, 224, 224)";
  block2.style.border = "2px solid rgb(224, 224, 224)";
}

function errorInput(pledge, input) {
  pledge.style.color = "red";
  input.style.border = "2px solid red";
}

function validInput(pledge, input) {
  pledge.style.color = "hsl(176, 50%, 47%)";
  input.style.border = "1px solid hsl(0, 0%, 48%)";
}

//THANKS FOR SUPPORT
function openThanks() {
  overlay.classList.remove("hidden");
  contThanks.classList.remove("hidden");
}

function closeThanks() {
  overlay.classList.add("hidden");
  contThanks.classList.add("hidden");
}

function updatePeople() {
  let people = Number(totalPeople.textContent.replace(",", ""));
  people++;
  let updPeople = people.toString();
  totalPeople.textContent = `${updPeople[0]},${updPeople.slice(1)}`;
}

function updateMoney(tip) {
  let money = Number(totalMoney.textContent.replace(",", "").replace("$", ""));
  money = money + tip;

  if (money >= 100000) {
    let updMoney = money.toString();
    totalMoney.textContent = `$${updMoney.slice(0, 3)},${updMoney.slice(3)}`;
  } else {
    let updMoney = money.toString();
    totalMoney.textContent = `$${updMoney.slice(0, 2)},${updMoney.slice(2)}`;
  }

  return money;
}

function updateProgress(sum) {
  let persent = (sum * 100) / 100000;

  if (persent >= 100) {
    progressBar.style.width = `100%`;
  } else {
    progressBar.style.width = `${persent}%`;
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//EVENTS

// BOOKMARK
btnBookmark.addEventListener("click", () => {
  if (bookMName.textContent === "Bookmark") {
    bookmarkActive();
  } else {
    bookmarkOff();
  }
});

////////////////////////////////////////////////////////////////////////
//MAIN PAGE BUTTONS
btnBamboo.addEventListener("click", () => {
  header.scrollIntoView({ behavior: "smooth" });
  openModal();
  label2.click();
  selected(bot2, block2);
});

btnBlackEdition.addEventListener("click", () => {
  mainCont.scrollIntoView({ behavior: "smooth" });
  openModal();
  label3.click();
  selected(bot3, block3);
});
////////////////////////////////////////////////////////////////////////
//BACK THIS PROJECT
openBack.addEventListener("click", openModal);
closeBack.addEventListener("click", closeModal);

allBtns.forEach((value) => {
  value.addEventListener("click", () => {
    if (value.classList.contains("block__top--label")) {
      if (value.id === "label-1") {
        selected(bot1, block1);
        unselected(bot2, bot3, block2, block3);
      } else if (value.id === "label-2") {
        selected(bot2, block2);
        unselected(bot1, bot3, block1, block3);
      } else if (value.id === "label-3") {
        selected(bot3, block3);
        unselected(bot1, bot2, block1, block2);
      }
    }
  });
});

btn1.addEventListener("click", () => {
  closeModal();
  openThanks();
  updatePeople();
});

btn2.addEventListener("click", () => {
  let tip = Number(inp2.value);
  if (tip < 25 || !Number(tip)) {
    errorInput(pl2, inp2);
  } else {
    validInput(pl2, inp2);
    closeModal();
    openThanks();
    updatePeople();
    updateProgress(updateMoney(tip));
  }
});

btn3.addEventListener("click", () => {
  let tip = Number(inp3.value);
  if (tip < 75 || !Number(tip)) {
    errorInput(pl3, inp3);
  } else {
    validInput(pl3, inp3);
    closeModal();
    openThanks();
    updatePeople();
    updateProgress(updateMoney(tip));
    mainCont.scrollIntoView({ behavior: "smooth" });
  }
});

////////////////////////////////////////////////////////////////////////
//THANKS FOR SUPPORT

btnThanks.addEventListener("click", () => {
  closeThanks();
});

////////////////////////////////////////////////////////////////////////
//MOBILE MENU
mobMenuIcon.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__mobileMenu--img")) {
    overlay.classList.remove("hidden");
    mobMenuCont.classList.remove("hidden");
    mobMenuIcon.style.opacity = 0;
  }
});

mobCloseIcon.addEventListener("click", () => {
  overlay.classList.add("hidden");
  mobMenuCont.classList.add("hidden");
  mobMenuIcon.style.opacity = 1;
});
