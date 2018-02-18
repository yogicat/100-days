const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  var suffix = this.dataset.sizing || '';
  // '' for fallback 
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
