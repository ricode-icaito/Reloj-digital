function updateTime() {
  let now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  let timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById('time').textContent = timeString;
}

setInterval(updateTime, 1000); // Actualiza cada segundo
