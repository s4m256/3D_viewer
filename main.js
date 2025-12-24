let rotX = 0;
let rotY = 0;

let up = false;
let down = false;
let left = false;
let right = false;

let btnUp, btnDown, btnLeft, btnRight;

let selectObject;
let escolha = 'cylinder';

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    btnUp = createButton('↑');
    btnDown = createButton('↓');
    btnLeft = createButton('↑');
    btnRight = createButton('↓');

    positionButtons();

    btnUp.mousePressed(() => up = true);
    btnDown.mousePressed(() => down = true);
    btnLeft.mousePressed(() => left = true);
    btnRight.mousePressed(() => right = true);

    btnUp.mouseReleased(() => up = false);
    btnDown.mouseReleased(() => down = false);
    btnLeft.mouseReleased(() => left = false);
    btnRight.mouseReleased(() => right = false);

    selectObject = select('#object');

    selectObject.changed(() => {
    escolha = selectObject.value();
    });
}

function draw() {
    background(20);
    orbitControl()

    if (up) rotX -= 0.05;
    if (down) rotX += 0.05;
    if (left) rotY -= 0.05;
    if (right) rotY += 0.05;

    rotateX(rotX);
    rotateY(rotY);

    normalMaterial();

    if (escolha === 'cylinder') {
    cylinder(80, 150);
    } else if (escolha === 'cone') {
    cone(80, 150);
    } else if (escolha === 'ellipsoid') {
    ellipsoid(80, 100, 60);
    } else if (escolha === 'torus') {
    torus(80, 25);
    }

}

function positionButtons() {
    const margin = 20;
    const size = 40;

    btnUp.position(width - size*4 - margin, height - size*3 - margin);
    btnDown.position(width - size*4 - margin, height - size*2 - margin);
    btnLeft.position(width - size*2 - margin, height - size*3 - margin);
    btnRight.position(width - size*2 - margin, height - size*2 - margin);

    btnUp.size(size, size);
    btnDown.size(size, size);
    btnLeft.size(size, size);
    btnRight.size(size, size);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    positionButtons();
}
