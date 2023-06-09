const secHand = document.querySelector('.sec');
const minHand = document.querySelector('.min');
const hrsHand = document.querySelector('.hrs');

function setTime() {
    const time = new Date();

    const sec = time.getSeconds();
    const secDeg = sec * 6 + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const min = time.getMinutes();
    const minDeg = min * 6 + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hrs = time.getHours();
    const hrsDeg = hrs * 15 + 90;
    hrsHand.style.transform = `rotate(${hrsDeg}deg)`;
}

setInterval(setTime, 1000);
setTime();
