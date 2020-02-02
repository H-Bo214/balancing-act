
var box = document.getElementById('oscarClose');
  // console.log(box);
var closeIcon = document.getElementById('x_button');
  // console.log(closeIcon);
closeIcon.addEventListener('click', removeBanner);
function removeBanner() {
  // console.log('working');
  box.style.display = 'none';
}
var wallet = document.querySelector('.icons2');
wallet.addEventListener('click', hideDashboard);
var clipboard = document.querySelector('.icons1');
clipboard.addEventListener('click',displayDashboard);
var mainAccts = document.querySelector('.mainAccts')
var header = document.querySelector('.header')
var aside = document.querySelector('aside');
function hideDashboard() {
  clipboard.style.borderLeft = 'none';
  wallet.style.borderLeft = 'solid';
  wallet.style.borderColor = '#1CA3BA';
  aside.style.display = 'none';
  box.style.display = 'none';
  mainAccts.style.display = 'none';
  header.style.display = 'none';
}
function displayDashboard(){
  clipboard.style.borderLeft = 'solid';
  clipboard.style.borderColor = '#1CA3BA';
  wallet.style.borderLeft = 'none';
  aside.style.display = 'initial';
  box.style.display = 'initial';
  mainAccts.style.display = 'initial';
  header.style.display = 'initial';
}
