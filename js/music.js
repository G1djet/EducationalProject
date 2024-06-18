const albumCovers = document.querySelectorAll('.album-cover');
const popup = document.querySelector('.popup');

albumCovers.forEach(cover => {
  cover.addEventListener('click', () => {
    const backCover = cover.querySelector('.back');
    backCover.style.transform = 'translateX(0)';
    popup.style.display = 'block';
  });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.album-cover')) {
      const backCovers = document.querySelectorAll('.back');
      backCovers.forEach(back => {
        back.style.transform = 'translateX(100%)';
      });
      popup.style.display = 'none';
    }
  });
  
  