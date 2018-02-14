## Drum Kit

[project result](https://yogicat.github.io/JavaScript30/01-drumkit)

---

첫 프로젝트는 키보드로 소리 연주하기
키 눌렀을때 연결된 사운드 플레이하기 + 눌렀을때 그래픽 효과주기

---

### 알게된것

- `data-attribute` 
- `addEventListener()`
- keyboardEvent
- back-ticks as **template literals**
- `HTMLMediaElement.currentTime`

---

### `data-attribute`
사용자 정의 attribute 
`data-something` 원하는 내용으로 쓸 수 있다.

---

###  `addEventListener()`
- `target.addEventListener(type, listener[, options])`
- method adds the specified EventListener-compatible object to the list of event listeners for the specified event type one the EventTarget on which it is called. The event target may be an Element in a document, the Document inset, a Window, or any other object that supports events.
- type  `keydown`

---

### KeyboardEvent
- keydown, keypress, keyup
- KeyboardEvent indicates just what’s happening on a key. 
- `console.log(e)` 로 `addEventListener`를 통해 전달받은 이벤트를 찍어 볼 수 있다.
- keycode.info 키보드의 키 코드 값을 확인 할 수 있는 사이트

![](README/Screen%20Shot%202018-02-13%20at%2020.27.18.png)


1. When the key is first depressed, the keydown event is sent.
2. If the key is not a modifier key, the keypress event is sent.
3. When the user releases the key, the keyup event is sent.

---

### `currentTime`

- HTMLMediaElement.currentTime : gives the current playback time / set this value seeks the media to the new time
`audio.currentTime = 0`

---
