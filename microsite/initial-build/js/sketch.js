let bg = '#000'
let fg = '#fff'
let r;

function setup() {
  const container = document.getElementById('sketch-container');
  createCanvas(container.clientWidth, container.clientHeight);
}

function windowResized() {
  const container = document.getElementById('sketch-container');
  resizeCanvas(container.clientWidth, container.clientHeight);
}


function draw() {
  background(bg);
  let range = int(map(mouseX, 0, width, 0, 10));
  r = width / range;
  for(let i = 0; i < width; i+=r){
    ellipse(i+r/2, 200, r, r);
  }
}