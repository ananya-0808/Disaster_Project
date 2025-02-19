function makeItFall() {
  var object = document.querySelector('.fa');
  object.classList.add('fall');
  object.addEventListener('transitionend', function() {
    window.location.href = "page1.html";
  });
}