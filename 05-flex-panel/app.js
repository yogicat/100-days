const panel = document.querySelector('.panels');
const panels = document.querySelectorAll('.panel');
let isOpen = false;

function toggleOpen(e) {
  if (!this.classList.contains('open')) {
    panels.forEach(panel=> panel.classList.remove('open'));
    // panels.forEach(panel=> panel.classList.remove('open-active'));
  }
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

