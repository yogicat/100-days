
```html
<label for="blur">blur </label>
<input id="blur" type="range" name="blur" min="10" max="25" value="10" data-sizing="px">
   
<label for="base">base </label>
<input id="base" type="color" name="base" value="#ffc600">
```

```css
:root {
  --base: #2B86C5;
  --spacing: 400px;
  --blur: 0px;
}
```

```js
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  var suffix = this.dataset.sizing || '';
  // '' for fallback 
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```

