score = 0;
cross = true;
document.onkeydown = function (e) {
  console.log("key code is: ", e.key);
  if (e.key == "ArrowUp") {
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(() => {
      dino.classList.remove('animateDino')
    }, 700);
  }
  if (e.key == "ArrowRight") {
    dion = document.querySelector('.dino');
    dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinox + 112 + "px";
  }
  if (e.key == "ArrowLeft") {
    dion = document.querySelector('.dino');
    dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dinox - 112) + "px";
  }

}

setInterval(() => {
  dino = document.querySelector('.dino');
  gameover = document.querySelector('.gameover');
  obstacle = document.querySelector('.obstacle');
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

  offsetx = Math.abs(dx - ox);
  offsety = Math.abs(dy - oy);
  console.log(offsetx, offsety)
  if (offsetx < 73 && offsety < 52) {
    gameover.style.visibility = 'visible';
    obstacle.classList.remove('obstacleani');
  } else if (offsetx < 145 && cross) {
    score++;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
      newDur = aniDur - 0.8;
      obstacle.style.animationDuration = newDur + 's';
      console.log("new animation duration",newDur);
    }, 500);
  }

}, 10);

function updateScore(score) {
  ScoreCon.innerHTML = "Your Score: " + score;
}
// 33:55 codewithharry i created an action game in pure html