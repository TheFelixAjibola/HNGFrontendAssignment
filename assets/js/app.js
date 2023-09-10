function today() {
  // HTML Classes
  const day = document.querySelector(".day_of_week");
  const UTC = document.querySelector(".time_of_the_week");

  const dOW = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentTimeMiliseconds = Date.now();
  const currentDate = new Date();
  const currentdOW = dOW[currentDate.getDay()];

  const currentTime = currentTimeMiliseconds;

  // DOM Manipulation
  day.textContent = currentdOW;
  UTC.textContent = currentTime;
}

today();
setInterval(today, 1);
