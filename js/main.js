// Animate Smooth Scroll
$('#view-work').on('click', function() {
  const images = $('#images').position().top;

  $('html, body').animate(
    {
    scrollTop: images
    },
    900
  );
});


// event Listeners
document.getElementById('submitMe').addEventListener('click', runMe);


// Functions
function runMe (e) {
  e.preventDefault();
  alert('Thank you! We will contact you soon.');
}