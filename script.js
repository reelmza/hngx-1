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
  if (now.getMinutes() < 9) {
    minutes.innerText = "0" + now.getMinutes();
    console.log("0" + now.getMinutes());
  } else {
    minutes.innerText = now.getMinutes();
  }

  if (now.getSeconds() < 9) {
    seconds.innerText = "0" + now.getSeconds();
  } else {
    seconds.innerText = now.getSeconds();
  }

  hours.innerText = now.getHours();
}, 1000);
