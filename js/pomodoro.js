//Inicializando variáveis e canvas
const canvas = document.getElementById("clock");
const ctx = canvas.getContext("2d");
const size = 300;
const startAngle = -Math.PI / 2;
const endAngle = (3 * Math.PI) / 2;
const radius = size / 2;
const lineWidth = 10;
const fontSize = 30;
const focusTime = 25 * 60; //25 minutos
const restTime = 5 * 60; //5 minutos
let timerStarted = false;
let duration = focusTime;
let remainingTime = duration;
let intervalId;

//Canvas width e height
canvas.width = size * 1.5;
canvas.height = size * 1.5;
ctx.scale(1.5, 1.5);

// Desenhando círculo
drawCircle(
  radius,
  radius,
  radius - lineWidth / 2,
  startAngle,
  endAngle,
  "#0e0124"
);

// Desenhando tempo restante no centro do relógio
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.font = `${fontSize}px Roboto, sans-serif`;

function drawTime() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  ctx.clearRect(0, 0, size, size);

  // Desenhando círculo
  drawCircle(
    radius,
    radius,
    radius - lineWidth / 2,
    startAngle,
    endAngle,
    "#0e0124"
  );

  // Atualizando tempo restante
  ctx.fillStyle = "#fff";
  ctx.fillText(
    `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`,
    radius,
    radius
  );

  // Desenhando barra de progresso
  const progress = (duration - remainingTime) / duration;
  drawCircle(
    radius,
    radius,
    radius - lineWidth / 2,
    startAngle,
    startAngle + progress * 2 * Math.PI,
    "#2d086d"
  );

  remainingTime--;
  if (remainingTime < 0) {
    clearInterval(intervalId);
    //o relógio deve ficar alterando entre tempo de descanso e foco
    duration = duration === focusTime ? restTime : focusTime;
    remainingTime = duration;
    intervalId = setInterval(drawTime, 1000);
  }
}

function handleBtnClick() {
  timerStarted = !timerStarted;
  if (timerStarted) intervalId = setInterval(drawTime, 1000);
}

function drawCircle(x, y, raio, anguloInicial, anguloFinal, color) {
  ctx.beginPath();
  ctx.arc(x, y, raio, anguloInicial, anguloFinal);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

const btn = document.querySelector("#start-pause");
function handleBtnClick() {
  timerStarted = !timerStarted;
  if (timerStarted) {
    intervalId = setInterval(drawTime, 1000);
    btn.textContent = "Pausar";
  } else {
    clearInterval(intervalId);
    btn.textContent = "Iniciar";
  }
}

function handleResetClick() {
  clearInterval(intervalId);
  timerStarted = false;
  duration = focusTime;
  remainingTime = duration;
  drawTime();
  btn.textContent = "Iniciar";
}
