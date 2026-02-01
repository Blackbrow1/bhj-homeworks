const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.querySelector('.tooltip');

hasTooltips.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    if (tooltip.classList.contains('tooltip_active') && 
        tooltip.textContent === item.title) {
      tooltip.classList.remove('tooltip_active');
      return;
    }

    const rect = item.getBoundingClientRect();
    
    tooltip.textContent = item.getAttribute('title') || item.title;
    
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom}px`;
    
    tooltip.classList.add('tooltip_active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('has-tooltip')) {
    tooltip.classList.remove('tooltip_active');
  }
});