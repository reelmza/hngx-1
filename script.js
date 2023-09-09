const profileDay = document.getElementById("profile-day");
const UTCTime = document.getElementById("UTCTime");

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
  let hour, minutes, seconds, milliseconds;

  if (now.getHours() < 9) {
    hour = "0" + now.getHours();
  } else {
    hour = "" + now.getHours();
  }

  if (now.getMinutes() < 9) {
    minutes = "0" + now.getMinutes();
  } else {
    minutes = "" + now.getMinutes();
  }

  if (now.getSeconds() < 9) {
    seconds = "0" + now.getSeconds();
  } else {
    seconds = "" + now.getSeconds();
  }

  milliseconds = now.getMilliseconds();

  UTCTime.innerText = hour + ":" + minutes + ":" + seconds + ":" + milliseconds;
}, 1000);
