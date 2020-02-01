
var box = document.getElementById('oscarClose');
  // console.log(box);
var closeIcon = document.getElementById('x_button');
  // console.log(closeIcon);
var listen = closeIcon.addEventListener('click', removeBanner);

function removeBanner() {
  // console.log('working');
  box.style.display = 'none';
}

var wallet = document.querySelector('.icons2');
  // console.log(wallet);

var dashboard = document.querySelector('.icons1');
    // console.log(dashboard);

var walletClick = document.addEventListener('click', hide);

var mainAccts = document.querySelector('.mainAccts')

var header = document.querySelector('.header')
function hide() {
  dashboard.style.borderLeft = 'none';
  wallet.style.borderLeft = 'solid';
  wallet.style.borderColor = '#1CA3BA';
  aside.style.display = 'none';
  box.style.display = 'none';
  mainAccts.style.display = 'none';
  header.style.display = 'none';
}








// var walletClick2 = document.addEventListener('click', hideAside);

var aside = document.querySelector('aside');




// function hideAside(){
//   aside.style.display = 'none';
// }
