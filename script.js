function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
hamburgerWrapper.addEventListener("click", (e) => {
  hamburgerWrapper.classList.toggle("active");
});

const pcDesktop = document.querySelector("#plugnchug-desktop");
const pcMobile = document.querySelector("#plugnchug-mobile");
const pcButtonContainer = document.querySelector(".portfolio .container .btns");
const pcPortfolioIframe = document.querySelector(
  ".portfolio .container .iframe"
);
const pcIframeContainer = document.querySelector(".portfolio .container");

pcMobile.addEventListener("click", (e) => {
  if (window.innerWidth >= 852) {
    pcIframeContainer.style.width = "375px";
  }
});

pcDesktop.addEventListener("click", (e) => {
  if (window.innerWidth >= 852) {
    pcIframeContainer.style.width = "calc(min(90vw, 1100px))";
  }
});

const contactName = document.querySelector("#name");
const contactEmail = document.querySelector("#email");
const contactEmailFormControl = document.querySelector("#email-form-control");
const contactMessage = document.querySelector("#message");
const contactSubmit = document.querySelector("#contact-submit");

contactSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    contactName.style.border = contactName.value
      ? "1px solid #102a42"
      : "1px solid tomato";
    contactEmail.style.border = contactEmail.value
      ? "1px solid #102a42"
      : "1px solid tomato";
    contactMessage.style.border = contactMessage.value
      ? "1px solid #102a42"
      : "1px solid tomato";
  }
  if (!emailIsValid(contactEmail.value)) {
    const emailInvalid = document.querySelector(".emailInvalid");
    emailInvalid.innerText = "*Email is not valid";
    emailInvalid.style.color = "tomato";
    contactEmail.style.border = "1px solid tomato";
  } else {
    const emailInvalid = document.querySelector(".emailInvalid");
    emailInvalid.innerText = "";
    contactEmail.style.border = "1px solid #102a42";
  }

  if (
    contactName.value &&
    emailIsValid(contactEmail.value) &&
    contactMessage.value
  ) {
    const thankContact = document.querySelector(".thank-contact");
    thankContact.innerText =
      "Thank you for your message, I will get back to you shortly!";
    thankContact.style.color = "limegreen";
    const subject = "Dsine.io Contact";

    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  }
});
