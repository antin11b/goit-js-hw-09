const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClickStartBtn = () => {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const onClickStopBtn = () => {
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
  clearInterval(timerId);
};

startBtnRef.addEventListener('click', onClickStartBtn);
stopBtnRef.addEventListener('click', onClickStopBtn);
