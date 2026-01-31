const rotatorCases = Array.from(document.querySelectorAll('.rotator__case'));
let currentIndex = 0;

rotatorCases.forEach((caseEl, index) => {
  caseEl.classList.toggle('rotator__case_active', index === 0);
});

setInterval(() => {
  rotatorCases[currentIndex].classList.remove('rotator__case_active');
  
  currentIndex = (currentIndex + 1) % rotatorCases.length;
  
  rotatorCases[currentIndex].classList.add('rotator__case_active');
}, 1000);
