
var box = document.getElementById('oscarClose');
  console.log(box);

var closeIcon = document.getElementById('x_button');
  console.log(closeIcon);
var listen = closeIcon.addEventListener('click', removeBanner);

function removeBanner() {
  console.log('working');
  box.style.display = 'none';
}
