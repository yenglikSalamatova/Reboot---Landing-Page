const overlay = document.querySelector(".overlay");
const modal = document.querySelector("#modal");
const formButton = document.getElementById("form__btn");
const emailOkBtn = document.querySelector(".email-success-btn");
const closeEmailBtn = document.querySelector(".email-success__close");
const emailInputs = document.querySelectorAll(".contacts__formbox input");
const emailInputsArray = [...emailInputs]; // преобразование NodeList в массив

// Функция открытия модального окна
const openModal = (e) => {
  e.preventDefault();
  if (emailInputsArray.some((input) => !input.value)) {
    alert("Введены не все поля");
  } else {
    overlay.style.display = "block";
    modal.style.display = "flex";
  }
};

// Функция закрытия модального окна
const closeModal = (e) => {
  // e.preventDefault();
  overlay.style.display = "none";
  modal.style.display = "none";
};

// Нажатие на Esc и закрытие модального окна
document.addEventListener("keydown", function (e) {
  // console.log(e); // KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …}
  if (e.key === "Escape" && modal.style.display == "flex") {
    closeModal();
  }
});

// Обработка клика при нажатии на кнопку отправки формы
formButton.addEventListener("click", openModal);

// Обработка закрытия модального окна при клике на кнопку и крестик
emailOkBtn.addEventListener("click", closeModal);
closeEmailBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// Нажатие на ссылку - блог в хедере
const blogLink = document.getElementById("blog-link");
const blogDropdown = document.getElementById("blog-dropdown");

blogLink.addEventListener("click", (ev) => {
  ev.preventDefault();
  blogDropdown.classList.toggle("dropdown-open");
});

const menuBars = document.querySelector(".header-menu-bars");
const menu = document.querySelector(".header__menu-list");
const openMenu = () => {
  menu.classList.toggle("open-menu");
};

// Реагирование на нажатие вопросов в блоке FAQ
const openFaqAnswer = (question) => {
  const faqAnswer = question.querySelector(".faq__questions-answer");

  faqAnswer.classList.toggle("faq__questions-answer--active");
  const buttonActive = question.querySelector(".faq__questions-question");
  buttonActive.classList.toggle("faq__question--active");
};

// Счетчик в hero
const counter = document.querySelectorAll(".hero_right-badge-heading");
// console.log(counter);
counter.forEach((item) => {
  item.textContent = 0;
  let endValue = item.getAttribute("data-num");
  let increament = endValue / 5;
  function changeNum() {
    let value = +item.innerHTML;
    if (value < endValue) {
      value += Math.round(increament);
      item.innerHTML = value;
      setTimeout(changeNum, 100);
    } else {
      item.innerHTML = endValue + "+";
    }
  }
  changeNum();
});

// // Печатание заголовка разными словами ---- отключено
// let output = document.querySelector(".hero__heading-one");
// console.log(output);
// let words = [
//   "Advanced Business Solutions",
//   "Supply Vast Commercial Remedies",
//   "Deliver Substantial Enterprise Resolutions",
//   "Furnish Large-scale Business Answers",
//   "Provide Comprehensive Organizational Strategies",
// ];

// let charTurn = 0;
// let wordTurn = 0;
// printWord();
// function printWord() {
//   if (charTurn <= words[wordTurn].length) {
//     output.innerHTML = words[wordTurn].substr(0, charTurn);
//     charTurn++;
//     setTimeout(printWord, 50);
//   } else {
//     setTimeout(deleteWord, 1600);
//   }
// }

// function deleteWord() {
//   if (charTurn >= 0) {
//     output.innerHTML = words[wordTurn].substr(0, charTurn);
//     charTurn--;
//     setTimeout(deleteWord, 50);
//   } else {
//     if (wordTurn < words.length - 1) {
//       wordTurn++;
//     } else {
//       wordTurn = 0;
//     }
//     charTurn = 0;
//     setTimeout(printWord, 300);
//   }
// }
