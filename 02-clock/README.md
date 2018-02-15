## CSS + JS Clock



### Transform

- `transform-origin: 100%`
- `transform: rotate(120deg)`  
- `transition-timing-function: cubic-bezier(x,x,x,x);`

---

### `setInterval()`

- Window,Worker Interface에서 제공되는 메서드
- 정해진 시간 간격만큼 반복적으로 함수를 호출한다.
- `clearInterval()`을 호출하면 삭제할 수 있다.

```js
var intervalID = window.setInterval(myCallback, 500);

function myCallback() {
  // Your code here
}
```


---
### Date

- `newDate()` - 현재 시각 나타내는 인스턴스 생성
- `newDate(year, month, day, hour, minutes, seconds)` - 사용자 정의 시각 인스턴스 생성


### Date.prototype Methods

**Getter**
- Date.prototype.getDate()
- Date.prototype.getDay()
- Date.prototype.getHours()
- Date.protrotype.getSeconds()
- Date.prototype.getMonth()
- Date.prototype.getMinutes()
- Date.prototype.getTime()

**Setter**
- Date.prototype.setDate()
- Date.prototype.setHours()
- Date.prototype.setFullYear()
- … getter 와 비슷하게 있다

**Conversion**
- Date.prototype.toDateString()
- Date.prototype.toTimeString()