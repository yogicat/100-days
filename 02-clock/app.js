var clockInit = (function () {
  var secondHand = document.querySelector('.second-hand');
  var minHand = document.querySelector('.min-hand');
  var hourHand = document.querySelector('.hour-hand');
  var clockHour = document.querySelector('.clock-hour');
  var clockMin = document.querySelector('.clock-min');

  function setDate() {
    var now = new Date();
    var second = now.getSeconds();
    var min = now.getMinutes();
    var hour = now.getHours();
    var secondsDegree = (second / 60) * 360 + 90;
    var minDegree = (min / 60) * 360 + 90;
    var hourDegree = (hour / 12) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    console.log(min);

    if (secondsDegree === 90 || minDegree === 90) {
      secondHand.style.transition = 'none';
      minHand.style.transition = 'none';
      hourHand.style.transition = 'none';
    }
  }

  setInterval(setDate, 1000);
  clockMin.innerHTML = new Date().getMinutes();
  clockHour.innerHTML = new Date().getHours();
}());
