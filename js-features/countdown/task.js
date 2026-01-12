const timerCount = document.querySelector('#timer');

let timerId = setInterval(() => {
  let currentValue = Number(timerCount.textContent);
  
  if (currentValue <= 0) {
    clearInterval(timerId);
    alert('Вы победили в конкурсе!');
    return;
  }
  
  timerCount.textContent = currentValue - 1;
}, 1000);
