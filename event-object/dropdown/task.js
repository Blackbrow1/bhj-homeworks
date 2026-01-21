const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.addEventListener('click', () => {
  dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItems.forEach(item => {
  const link = item.querySelector('.dropdown__link');
  
  link.addEventListener('click', (event) => {
    event.preventDefault();
    
    dropdownValue.textContent = link.textContent;
    dropdownList.classList.remove('dropdown__list_active');
  });
});