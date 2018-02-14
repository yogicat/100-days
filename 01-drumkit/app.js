
function playSound(e) {
  var audio = document.querySelector(`audio[data-key="${e.which}"]`);
  var key = document.querySelector(`.key[data-key="${e.which}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('isPlaying');
  document.querySelector('h1').classList.add('fade');
}

function removeClass(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('isPlaying')
}



var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  key.addEventListener('transitionend', removeClass)
})

window.addEventListener('keydown', playSound);
