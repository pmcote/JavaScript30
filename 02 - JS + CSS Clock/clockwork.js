const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function calcDeg(unit, totalUnits) {
  return ((unit/totalUnits) * 360) + 90;
}

function Clock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secDegs = calcDeg(seconds, 60);
  const minDegs = calcDeg(minutes, 60);
  const hourDegs = calcDeg(hours, 12);

  secondHand.style.transform = `rotate(${secDegs}deg)`;
  minuteHand.style.transform = `rotate(${minDegs}deg)`;
  hourHand.style.transform = `rotate(${hourDegs}deg)`;
}

setInterval(Clock, 1000);
