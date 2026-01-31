const buttonFontSize = Array.from(document.querySelectorAll('.font-size'));
const bookContent = document.querySelector('.book__content');

buttonFontSize.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    
    buttonFontSize.forEach(btn => {
      btn.classList.remove('font-size_active');
    });
    
    item.classList.add('font-size_active');
    
    const size = item.dataset.size;
    
    bookContent.classList.remove('book_fs-small', 'book_fs-big');
    
    if (size === 'small') {
      bookContent.classList.add('book_fs-small');
    } else if (size === 'big') {
      bookContent.classList.add('book_fs-big');
    }
  });
});