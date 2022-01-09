const burger = document.querySelector("#burger");
const navList = document.querySelector("#nav-list");
const radioShipping = document.querySelectorAll(".shipping-radio");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const stepOne = document.querySelector(".step-1");
const stepTwo = document.querySelector(".step-2");
const stepThree = document.querySelector(".step-3");

// count the step
let formStepsNum = 0;

// burger menu toggle
burger.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// radio wrapper border color changes when selected
// not working properly atm
radioShipping.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    if (e.target.checked) {
      e.target.parentElement.style.borderColor = "black";
      e.target.removeAttribute("checked");
    } else if (e.target.removeAttribute("checked")) {
      e.target.parentElement.style.borderColor = "red";
    }
  });
});

nextBtn.addEventListener("click", () => {
  // whenever clicking next step, increment by 1
  formStepsNum++;
  updateFormSteps();
  updateProgressbar();
});

prevBtn.addEventListener("click", () => {
  formStepsNum--;
  updateFormSteps();
  updateProgressbar();
});


function updateFormSteps() {
  // remove previous step content
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  // add form-step-active class to next index
  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, index) => {
    if (index < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
      progressStep.classList.add("progress-step-checked");
    } else {
      progressStep.classList.remove("progress-step-active");
      progressStep.classList.remove("progress-step-checked");
    }
  });
}

// stepper tutorial https://www.youtube.com/watch?v=JFfVilQSius
