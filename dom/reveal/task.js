function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top <= windowHeight * 0.9 && rect.bottom >= 0
  );
}

function handleRevealElements() {
  const revealElements = document.querySelectorAll('.reveal');
  
  revealElements.forEach(element => {
    if (isElementVisible(element)) {
      element.classList.add('reveal_active');
    } else {
      element.classList.remove('reveal_active');
    }
  });
}

function handleScroll() {
  handleRevealElements();
}

document.addEventListener('DOMContentLoaded', function() {
  handleRevealElements();
  
  window.addEventListener('scroll', handleScroll);
  
  window.addEventListener('resize', handleScroll);
});