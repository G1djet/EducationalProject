const productElements = document.querySelectorAll('.merch-item');
const popupOverlay = document.querySelector('.popup-overlay');
const popupImages = document.querySelectorAll('.popup-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const closeBtn = document.querySelector('.close-btn');
const submitCommentBtn = document.querySelector('.submit-comment');
const commentNameInput = document.querySelector('.comment-name');
const commentTextInput = document.querySelector('.comment-text');
const productNameElement = document.querySelector('.product-name');
const productPriceElement = document.querySelector('.product-price');
const sizeSelector = document.getElementById('size');

let currentImageIndex = 0;

function showPopup(product) {
  popupOverlay.style.display = 'flex';
  showImage(currentImageIndex);
  updatePopupContent(product);
}

function hidePopup() {
  popupOverlay.style.display = 'none';
}

function showImage(index) {
  popupImages.forEach((image, i) => {
    image.classList.toggle('active', i === index);
  });
}

function navigateImages(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) {
    currentImageIndex = popupImages.length - 1;
  } else if (currentImageIndex >= popupImages.length) {
    currentImageIndex = 0;
  }
  showImage(currentImageIndex);
}

function updatePopupContent(product) {
  const productName = product.querySelector('h3').textContent;
  const productPrice = product.querySelector('p:last-child').textContent;
  productNameElement.textContent = productName;
  productPriceElement.textContent = productPrice;
  // Обновите другую информацию о продукте, если необходимо
}

prevBtn.addEventListener('click', () => navigateImages(-1));
nextBtn.addEventListener('click', () => navigateImages(1));
closeBtn.addEventListener('click', hidePopup);
submitCommentBtn.addEventListener('click', () => {
  const commentName = commentNameInput.value;
  const commentText = commentTextInput.value;
  // Добавьте логику сохранения комментария здесь
  commentNameInput.value = '';
  commentTextInput.value = '';
});

productElements.forEach(product => {
  product.addEventListener('click', () => showPopup(product));
});