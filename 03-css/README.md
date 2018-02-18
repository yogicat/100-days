### CSS Variable
Sass의 변수처럼 CSS에도 비슷한 기능이 있다. `--main-color: black;` 커스텀 프로퍼티와 `--`를 통해 변수를 만들고 `var()`을 통해 재사용할 수 있다. **IE는 지원하지 않음!**

- [MDN: CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
- [MDN: Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN: Custon Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

---
### Make variables

- `:root` 에 글로벌 변수로 변경하고 싶은 값들을 세팅한다 (원하는 요소에 바로 사용해도 무관)
- `:root`는 pseudo-class로 도큐먼트의 루트요소들을 나타낸다(`html`선택자와 동일하나 우선순위가 더 높다)


```css
/* 변수 선언 */
:root {
  --base: #2B86C5;
  --spacing: 400px;
  --blur: 0px;
}
```

---

- css `var` 함수를 통해 재사용할 수 있다.
- 변수가 사용될 부분에 `var(--name)` 입력한다

```css

.circle {
  width: var(--spacing);
  height: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

```

---

### HTML controls

- input 컨트롤과 JS를 이용해 css값을 바로 변경하기.
- html에 css의 변수를 조절할 input 컨트롤을 만든다.
- px, rem, % 등의 prefix가 필요한 변수는 미리 사용자 지정 data-attribute로 값을 만들어 준다


```html
<form class="controls">
<label for="blur">blur </label>
<input id="blur" type="range" name="blur" min="10" max="25" value="10" data-sizing="px">
<!-- name은 css변수 이름과 동일하게 지정해준다 js에서 선택하기 위함  -->
<!-- data-sizing은 js에서 prefix로 사용하기 위해 지정 -->
<label for="base">base </label>
<input id="base" type="color" name="base" value="#ffc600">
</controls>
```

---

### JS interaction

- `getPropertyValue()` 
- `setProperty()`
- template literal(back-tick)과 expression`${expression}`을 사용해 값을 연동한다.


```js
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  var suffix = this.dataset.sizing || '';
  // dataset은 data-를 모아둔 obj
  // ''는 data-sizing없는 요소에 지정해주기 위해서

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // 상위html에 변경사항을 지정해 준다.
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
// input값이 변경되면 호출한다 - 마우스를 떼면 작동한다
// mousemove를 통해 마우스로 레인지를 조절하는 동안에도 작동하도록 한다
```


---

컨트롤 조절을 통해 실시간 값이 적용되는 것을 볼 수 있다.

[result](https://yogicat.github.io/JavaScript30/03-css/)
![css variable image](../screenshots/03-css.gif)

