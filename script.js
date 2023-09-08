const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const profileDay = document.getElementById("profile-day");

switch (new Date().getDay()) {
  case 0:
    day = "Sunday,";
    profileDay.innerText = day;
    break;
  case 1:
    day = "Monday,";
    profileDay.innerText = day;
    break;
  case 2:
    day = "Tuesday";
    profileDay.innerText = day;
    break;
  case 3:
    day = "Wednesday,";
    profileDay.innerText = day;
    break;
  case 4:
    day = "Thursday,";
    profileDay.innerText = day;
    break;
  case 5:
    day = "Friday,";
    profileDay.innerText = day;
    break;
  case 6:
    day = "Saturday,";
    profileDay.innerText = day;
}

const myinterval = setInterval(() => {
  const now = new Date();
  hours.innerText = now.getHours();
  minutes.innerText = now.getMinutes();
  seconds.innerText = now.getSeconds();
}, 1000);
