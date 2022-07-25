const box = document.querySelectorAll('.box img');

for (let i = 0; i < 6; i++) {
  box[i].addEventListener('mouseenter', function () {
    box[i].classList.toggle('bayangan1');
  });
  box[i].addEventListener('mouseleave', function () {
    box[i].classList.toggle('bayangan1');
  });
}