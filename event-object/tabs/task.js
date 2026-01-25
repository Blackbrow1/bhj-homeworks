const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach((item, idx) => {
  item.addEventListener('click', () => {
    tab.forEach(itm => {
      itm.classList.remove('tab_active');
    });

    tab[idx].classList.add('tab_active');

    tabContent.forEach((item, index) => {
      item.classList.remove('tab__content_active');

      if (index === idx) {
        item.classList.add('tab__content_active');
      }
    });
  });
});