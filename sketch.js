let fairyX, fairyY
let waterY

function setup() {
    createCanvas(800, 600)
    fairyX = width / 2
    fairyY = height / 2
    waterY = height
}

function draw() {
    background(0, 0, 100)

    fill(0, 0, 255, 150)
    rect(0, waterY, width, height - waterY);

    waterY -=0.5
    if (waterY < height / 2){
        waterY = height
    }

    drawFairy(fairyX, fairyY)

    fairyY += sin(frameCount * 0.1) * 2
}

function drawFairy(x, y) {
    noStroke()
    fill(255, 255, 0, 150)
    ellipse(x, y, 50, 50)

    fill(255, 200, 200, 200)
    ellipse(x - 20, y - 10, 40, 20)
    ellipse(x + 20, y - 10, 40, 20)
}