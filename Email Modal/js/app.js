window.onload = function () {
  let emailState = false;
  let emailModal = document.querySelector(".email-modal");
  let closeModal = document.querySelector(".email-modal__close-btn");
  let emailInput = document.querySelector(".email-modal__input");
  let emailButton = document.querySelector(".email-modal__button");
  let thankContainer = document.querySelector(".email-thank");
  let declineOffer = document.querySelector(".email-modal__decline-offer");

  let showModal = () => {
    if (emailState === false) {
      emailModal.classList.add("email-modal--visible");
      emailState = true;
    };
  };

  let closeButton = () => {
    emailModal.classList.remove("email-modal--visible");
  };

  let addError = () => {
    document.querySelector(".email-modal__form-group").classList.add("email-modal__form-group--error");
    document.querySelector(".email-modal__error-message").classList.add("email-modal__error-message--active");
  }

  let removeError = () => {
    document.querySelector(".email-modal__form-group").classList.remove("email-modal__form-group--error");
    document.querySelector(".email-modal__error-message").classList.remove("email-modal__error-message--active");
  };

  let showThankMessage = () => {
    thankContainer.classList.add("email-modal--success");
    setTimeout(() => {
      closeButton()
    }, 3000)
  }

  emailInput.addEventListener("click", () => {
    removeError();
  });

  function emailValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  };

  emailButton.addEventListener("click", () => {
    if (emailValid(emailInput.value)) {
      showThankMessage();
    } else {
      addError();
    }
  });

  declineOffer.addEventListener("click", () => {
    closeButton();
  });

  document.body.addEventListener('mouseleave', () => {
    showModal();
  });

  closeModal.addEventListener('click', () => {
    closeButton();
  });
};


// DAY 1-

// 1. window.onload =  function() {} = It is shows function after all document is loaded.

// 2. document.addEventListener('mouseleave'),() => {} = It shows email modal after mouse leave the document.

// 3. document.querySelector(".emai-modal") = It is used to select email-modal .

// 4. emailModal.classList.add("email-modal--visible") = classList.add is used add class="email-modal--visible" to the class="emai-modal".

// 5. document.querySelector(".email-modal__close-btn") = It is used to close email

// 6. closeModal.addEventListener('click',() => { emailModal.classList.remove("email-modal--visible")}) = It is used to close email when clicked on close button and then it remove "email-modal--visible" class from the .email-modal

// DAY 2 -

// 1.
/******* The email modal keep showing again and again whenever we mouse left site.So, that we created a function showModal(),in which we used if else statement. Then,I invoked function in document.body.addEventListene. 
 *
showModal() = First created a state  let emailState = false;and used it in if else, like- when emailState is false then emailModal.classList.add("email-modal--visible"); after that set  emailState = true; so that it don't add  emailModal.classList.add("email-modal--visible") again. It only reappears until user refresh it. *******/

// 2. let emailInput = document.querySelector(".email-modal__input");to select the the send button of from. Then add emaailInput to the addEventListener.click so that whatever it console email written in textbox which is emailInput.

// 3. let emailInput = document.querySelector(".email-modal__input") , which is the textbox where the email is added.

// 4.  function emailValid(email) {return /\S+@\S+\.\S+/.test(email)}; we used this regex so that user add correct gmail otherwise it will show error.

// 5.  emailButton.addEventListener("click", (e) => {}); Now in this we used if else statement . When emailInput is valid we console.log() correct email , else it will alert user . The emaailInput is confirmed by using function emailValid .To make it more eyepleasing I used email-modal__form-group and email-modal__form-group--error to add red line around input text whenever user entered invalid email. We also use  document.querySelector(".email-modal__error-message").classList.add("email-modal__error-message--active") ; to show user that input mail is not correct .
// else {document.querySelector(".email-modal__form-group").classList.add("email-modal__form-group--error"); document.querySelector(".email-modal__error-message").classList.add("email-modal__error-message--active");}

// DAY 3

// 1. Created closeButton(); function in javascript in which emailModal.classList.remove("email-modal--visible");logic is encapsulated in and invoke the this function in closeModal.addEventListener .

// 2. Created addError() and removeErroe(); the first one is to add error which is envoked in emailButton.addEventListener("click", ()=>{}); when user put invalit password . The second , is to remove error and invoked in  emailInput.addEventListener("click", ()=>{}); when user click on input textBox.

// 3. I selected let thankContainer = document.querySelector(".email-thank"); to get thank you message and then  thankContainer.classList.add("email-modal--success"); in a function called showThankMessage() , which is invoked in emailButton.addEventListener();so when user put the valid mail it will show the thank you message. 
































// window.onload = function () {
//   let emailState = false;
//   let emailModal = document.querySelector(".email-modal");
//   let closeButton = document.querySelector(".email-modal__close-btn");
//   let emailInput = document.querySelector(".email-modal__input");
//   let emailButton = document.querySelector(".email-modal__button");
//   let thankContainer = document.querySelector(".email-thank");
//   let declineOffer = document.querySelector(".email-modal__decline-offer");

//   function emailValid(email) {
//      It checks if the email is written clearly...
//     return /\S+@\S+\.\S+/.test(email);
//   }

//   let showModal = () => {
//     if (emailState === false) {
//       emailModal.classList.add("email-modal--visible");
//       emailState = true;
//     }
//   };

//   let closeModal = () => {
//     emailModal.classList.remove("email-modal--visible");
//   };

//   let addError = () => {
//     document
//       .querySelector(".email-modal__form-group")
//       .classList.add("email-modal__form-group--error");
//     document
//       .querySelector(".email-modal__error-message ")
//       .classList.add("email-modal__error-message--active");
//   };

//   let removeError = () => {
//     document
//       .querySelector(".email-modal__form-group")
//       .classList.remove("email-modal__form-group--error");
//     document
//       .querySelector(".email-modal__error-message ")
//       .classList.remove("email-modal__error-message--active");
//   };

//   let showThankMessage = () => {
//     thankContainer.classList.add("email-modal--success");
//     setTimeout(() => {
//       closeModal();
//     }, 3000);
//   };

//   emailInput.addEventListener("click", () => {
//     removeError();
//   });

//   emailButton.addEventListener("click", () => {
//     if (emailValid(emailInput.value)) {
//       showThankMessage();
//     } else {
//       addError();
//     }
//   });

//   declineOffer.addEventListener("click", () => {
//     closeModal();
//   });

//   closeButton.addEventListener("click", () => {
//     closeModal();
//   });

//   document.body.addEventListener("mouseleave", () => {
//     showModal();
//   });
//   console.log(document);
// };