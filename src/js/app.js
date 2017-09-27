$('.carousel').carousel({
  interval: 3000,
  keyboard: true,
  pause: 'hover',
  wrap: true
});

$('#slider1').on('slide.bs.carousel', function() {
  console.log('slide'); //fires on image slide
});
$('#slider1').on('slid.bs.carousel', function() {
  console.log('slid'); //fires after image slide
});

//Countdown Timer//
const countDownDate = new Date('May 18, 2018').getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $('#hero-section-text').html(`${days}d ${hours}h ${minutes} m ${seconds} s`);
  $('.countdown').html(`#GETMCNASTY IN <br> ${days}d ${hours}h ${minutes} m ${seconds} s`);

  if (distance < 0) {
    clearInterval(x);
    $('#hero-section-text').html(`PARTY TIME!`);
  }
}, 1000);
