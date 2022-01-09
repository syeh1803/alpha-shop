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

const shoppingCart = document.querySelector("#shopping-cart-details");
const productPrice = document.querySelectorAll(".product-price");

const deliveryFee = document.querySelector('.shipping-fee-calc');
const form = document.querySelector('.form');


// count the step
let formStepsNum = 0;

// burger menu toggle
burger.addEventListener("click", () => {
  navList.classList.toggle("show");
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

// delivery fee calculation
// form.addEventListener('click', () => {
//     const delivery = document.querySelector('input[name="delivery"]').value;
//     if(delivery === 'standard'){
//         deliveryFee.innerText = "免費"
//     } else if (delivery === 'dhl') {
//         deliveryFee.innerText = currencyFormat(500);
//     }
// })

// checkout items
shoppingCart.addEventListener("click", (e) => {
    updateCart(e);
});

// updateQuantity function
function updateCart(e) {
  // add or remove items
  if (e.target.matches(".minus-btn") || e.target.matches(".plus-btn")) {
    let quantityContainer = e.target.parentElement.children[1];
    let quantity = Number(quantityContainer.innerText);
    if (e.target.matches(".plus-btn")) {
      quantity += 1;
    } else {
      quantity -= 1;
      if (quantity < 0) {
        quantity = 0;
      }
    }
    quantityContainer.innerText = quantity;

    // update price
    // productPrice.forEach((price) => {
    //   // once quantity is incremented or decremented, update the price
      
    // });
  }
}