// selecting from mail HTML'S
var year = document.querySelector("#year");


//getting current year automatically
var date = new Date();
var getYear = date.getFullYear();
year.textContent = getYear;

function myBurger() {
  if (isClosed === true) {
    trigger.classList.remove("is-closed");
    trigger.classList.add("is-open");
    isClosed = false;
  } else {
    trigger.classList.remove("is-open");
    trigger.classList.add("is-closed");
    isClosed = true;
  }
}