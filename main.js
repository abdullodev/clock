function onTime() {
  const min = document.getElementById("min");
  const secund = document.getElementById("secund");
  const hour = document.getElementById("hour");
  let date = new Date();
  let s = date.getSeconds();
  let m = date.getMinutes();
  let h = date.getHours();

  secund.style.transform = `rotate(${s * 6}deg)`;
  min.style.transform = `rotate(${m * 6}deg)`;
  hour.style.transform = `rotate(${h * 30 + m / 2}deg)`;
}

onTime();

setInterval(onTime, 1000);
