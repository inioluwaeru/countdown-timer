let timeSecond = prompt('enter how many minutes you want');
const timeDis = document.querySelector("h1");

let y = (timeSecond * 60);

displayTime(y);

const countDown = setInterval(() => {
  y--;
  displayTime(y);
  if (y == 0 || y < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(x) {
  
  const min = Math.floor(x / 60);
  const sec = Math.floor(x % 60);
  timeDis.innerHTML = `
  ${min < 10 ? "0" : ""}${min} : ${sec < 10 ? "0" : ""}${sec} `;
}

function endCount() {
  timeDis.innerHTML = "Time out";
}
