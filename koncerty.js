const concertTitles = document.querySelectorAll('.concert-title');
const photoGalleries = document.querySelectorAll('.photo-gallery');
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content img');
const closeButton = document.querySelector('.close-button');

concertTitles.forEach((title, index) => {
  title.addEventListener('click', () => {
    photoGalleries[index].style.display = photoGalleries[index].style.display === 'none' ? 'flex' : 'none';
  });
});

photoGalleries.forEach((gallery) => {
  const photos = gallery.querySelectorAll('img');
  photos.forEach((photo) => {
    photo.addEventListener('click', () => {
      modalImage.src = photo.src;
      modal.style.display = 'block';
    });
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});