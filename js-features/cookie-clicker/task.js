const cookieImg = document.querySelector('.clicker__cookie');
const cookieCounter = document.querySelector('#clicker__counter');

let counter = 0;

cookieImg.addEventListener('click', () => {
  counter++;
  cookieCounter.textContent = counter;

  if (counter % 2 !== 0) {
    cookieImg.style.width = '180px';
  } else {
    cookieImg.style.width = '200px';
  }
});