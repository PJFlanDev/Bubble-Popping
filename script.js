const bubble = document.getElementById('bubbleContainer');
const bubbleSize = 100;
const startbutton = document.getElementById('startButton');
const gameArea = document.getElementById('gameArea');

//Get game area dimensions
const gameWidth = gameArea.offsetWidth;
const gameHeight = gameArea.offsetHeight;

let timeLeft = 10;
let timerInterval;

function startTimer() {
  timeLeft = 10;  // Reset to 10
  document.getElementById('timeLeft').textContent = timeLeft;
  
  timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById('timeLeft').textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);  // Run every 1000ms (1 second)
}

function endGame() {
  clearInterval(timerInterval);  // Stop the timer
  bubble.style.display = 'none';  // Hide bubble
  alert(`You popped ${score} bubbles!`);  // Or do something fancier
  score = 0;  // Reset score
  scoreBoard.textContent = `Score: ${score}`;  // Update score display
  timeLeft = 10;  // Reset time
  document.getElementById('timeLeft').textContent = `${timeLeft}`;
}

let score = 0;
const scoreBoard = document.getElementById('scoreBoard');
scoreBoard.textContent = `Score: ${score}`;

function createBubble(){
    bubble.style.display = 'block';

    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    bubble.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    const randomX = Math.random()* (gameWidth - bubbleSize);
    const randomY = Math.random()* (gameHeight - bubbleSize);
    bubble.style.left = randomX + 'px';
    bubble.style.top = randomY + 'px';
}
bubble.addEventListener('click', function(){
    score++;
    scoreBoard.textContent = `Score: ${score}`;
    bubble.style.display = 'none';

    createBubble();
});

startbutton.addEventListener('click', () => {
   createBubble();
   startTimer();
});