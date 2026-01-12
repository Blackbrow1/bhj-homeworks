const hole = Array.from(document.querySelectorAll('.hole'));
const dead = document.querySelector('#dead');
const lost = document.querySelector('#lost');

let counterDead = 0;
let counterLost = 0;

hole.forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('hole_has-mole')) {
      counterDead++;
      dead.textContent = counterDead;
    } else {
      counterLost++;
      lost.textContent = counterLost;
    }

    if (counterDead === 10) {
      resetCounter();
      alert('Победа');
    }

    if (counterLost === 5) {
      resetCounter();
      alert('Поражение');
    }
  });
});

function resetCounter() {
  counterDead = 0;
  dead.textContent = counterDead;
  counterLost = 0;
  lost.textContent = counterLost;
}