
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
$(document).foundation();
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
