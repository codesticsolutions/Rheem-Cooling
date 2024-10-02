// text slide
const typed = new Typed('.text-sld', {
  strings:['Split Air Conditioners','Window Air Conditioners','Cassette Air Conditioners'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true,

});
// content image slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// date and time
function displaydate() {
  var getdate = new Date();
  var hour = getdate.getHours();
  var min = getdate.getMinutes();
  var sec = getdate.getSeconds();
  var day = getdate.getDate();
  var month = getdate.getMonth();
  var year = getdate.getFullYear();
  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
  var sessiion = document.getElementById("session");
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;

}
setInterval(displaydate , 100);

