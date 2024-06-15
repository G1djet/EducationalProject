// function getRandomPosition() {
//     const x = Math.floor(Math.random() * 101) + '%';
//     const y = Math.floor(Math.random() * 101) + '%';
//     return { x, y };
// }

// function updateBackgroundPosition() {
//     const { x, y } = getRandomPosition();
//     document.body.style.setProperty('--x-pos', x);
//     document.body.style.setProperty('--y-pos', y);
// }

// // Обновлять позицию фона каждые 10 секунд
// setInterval(updateBackgroundPosition, 5000);

// // Сразу установить начальную позицию
// updateBackgroundPosition();
~function () {
    var video = document.querySelector('video')
  
    function handleResize() {
      var w0 = 320, h0 = 240, r0 = w0 / h0
      var w = window.innerWidth, h = window.innerHeight, r = w / h
      
      video.style.transform = r0 < r ? 'scaleX(' + r / r0 + ')' : 'scaleY(' + r0 / r + ')'
    }
  
    handleResize()
    window.addEventListener('resize', handleResize)
  }()