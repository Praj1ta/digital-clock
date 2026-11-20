const updateDate = () => {
  const currentDate = new Date();

  let day = currentDate.getUTCDay();
  let hours = currentDate.getHours();
  let min = currentDate.getMinutes();
  let sec = currentDate.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = String(hours ? hours : 12).padStart(2, 0);
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  const timeString = `${hours}:${min}:${sec}`;

  document.getElementById("time").textContent = timeString;
  document.getElementById("ampm").textContent = ampm;

  switch (day) {
    case 0:
      document.getElementById("sun").style.color = "orange";
      break;
    case 1:
      document.getElementById("mon").style.color = "orange";
      break;
    case 2:
      document.getElementById("tue").style.color = "orange";
      break;
    case 3:
      document.getElementById("wed").style.color = "orange";
      break;
    case 4:
      document.getElementById("thu").style.color = "orange";
      break;
    case 5:
      document.getElementById("fri").style.color = "orange";
      break;
    case 6:
      document.getElementById("sat").style.color = "orange";
      break;
  }
};

const darkModeSwitch = () => {
  document.body.classList.toggle("dark-mode");
};

setInterval(updateDate, 1000);
updateDate();
