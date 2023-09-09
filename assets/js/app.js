function today() {
  // HTML Classes
  let day = document.querySelector(".currentDayOfTheWeek");
  let hours = document.querySelector(".currentUTCHours");
  let minutes = document.querySelector(".currentUTCMinutes");
  let seconds = document.querySelector(".currentUTCSeconds");
  let miliseconds = document.querySelector(".currentUTCMilliseconds");

  const currentDate = new Date();
  const dOW = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = dOW[currentDate.getDay()];
  const currentUTCHours = currentDate.getUTCHours();
  const currentUTCMInutes = currentDate.getUTCMinutes();
  const currentUTCSeconds = currentDate.getUTCSeconds();
  const currentUTCMilliseconds = currentDate.getUTCMilliseconds();

  // DOM Manipulation
  day.innerHTML = currentDay;
  hours.innerHTML = currentUTCHours + 1;
  minutes.innerHTML = currentUTCMInutes;
  seconds.innerHTML = currentUTCSeconds;
  miliseconds.innerHTML = currentUTCMilliseconds;
}

today();
setInterval(today, 1);
