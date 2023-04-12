const innerBlock = document.getElementById("inner-block");
let distance = 0;

function moveRight() {
  distance += 10;
  innerBlock.style.left = distance + "px";

  if (distance < 894) {
    setTimeout(moveRight, 100);
  }
}

moveRight();