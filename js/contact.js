const main = document.querySelector('main');
const head = document.createElement('div');
const info = document.createElement('div');
const header = document.querySelector("header");
info.classList.add('info');
head.classList.add('head');
main.appendChild(head);
head.appendChild(info);
const menuBtn = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".menu-links");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});

const nameReg = /^[a-zA-Z]{3,}$/;
const subjectReg = /^.{10,}$/;
const commonEmail =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const addressReg = /^[a-zA-Z0-9\s,'-]*.{25,}$/;

const regexTester = (input, rule) => {
  if (input === '') {
    console.log('RegTest:', 'false, empty string');
    return false;
  }
  console.log('RegTest:', rule.test(input));
  return rule.test(input);
};
const nameInput = document.querySelector('#nameInput')
const subjectInput = document.querySelector('#subjectInput')
const emailInput = document.querySelector('#emailInput')
const addressInput = document.querySelector('#addressInput')
const form = document.querySelector('.contactForm');
const submit = document.querySelector('#formButton');
const feedback = document.createElement('div');
const nameFeedback = document.querySelector('.nameFeedback')
const subjectFeedback = document.querySelector('.subjectFeedback')
const emailFeedback = document.querySelector('.emailFeedback')
const addressFeedback = document.querySelector('.addressFeedback')
form.appendChild(feedback);

form.onsubmit = (e) => {
    e.preventDefault();
    if(!regexTester(nameInput.value, nameReg) || !regexTester(subjectInput.value, subjectReg) || !regexTester(emailInput.value, commonEmail) || !regexTester(addressInput.value, addressReg)) {
        feedback.innerHTML = "Wrong format, check the guidelines and try again.";
        return;
    }
    form.classList.add('hide');
    const finalDiv = document.createElement('div');
    finalDiv.id = 'done';
    main.appendChild(finalDiv);
    const feedbackDiv = document.createElement('div');
    finalDiv.appendChild(feedbackDiv);
    feedbackDiv.classList.add('feedbackDiv')
    const feedbackInput = document.createElement('input');
    feedbackInput.classList.add('feedbackInput');
    feedbackDiv.appendChild(feedbackInput);
    const feedbackSpan = document.createElement('span');
    feedbackSpan.classList.add('feedbackSpan');
    feedbackSpan.innerHTML = 'Why are you contacting us? (200 characters maximum)';
    feedbackDiv.appendChild(feedbackSpan);
    const finalBtn = document.createElement('button');
    finalBtn.classList.add('finalBtn');
    finalBtn.innerHTML = 'Send';
    feedbackDiv.appendChild(finalBtn);
    finalBtn.addEventListener("click", doneFunc);
};
const doneFunc = () => {
    const done = document.querySelector('#done');
    done.classList.add('hide');
    const successMsg = document.createElement('div');
    successMsg.classList.add('successMsg')
    main.appendChild(successMsg);
    successMsg.innerHTML = `Thanks for contacting us! We will get back to you within 2-4 business days.
    <i id="check" class="fa-solid fa-check"></i>
    `;
  };
  
  const finalBtn = document.querySelector('.finalBtn');