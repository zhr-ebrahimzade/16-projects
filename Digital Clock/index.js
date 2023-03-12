const hoursEL = document.getElementById("hours");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");

function getTime() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let timeDivision = "AM";
  if (h > 12) {
    h = h - 12;
    timeDivision = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hoursEL.innerText = h;
  minutesEL.innerText = m;
  secondsEL.innerText = s;
  setTimeout(() => getTime(), 1000);
}
getTime();
