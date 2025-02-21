function setup() {
    createCanvas(windowWidth, windowHeight); // Full-screen canvas
    background(0); // Black background
}

function draw() {
    let r = random(255), g = random(255), b = random(255);
    stroke(r, g, b); // Random color
    strokeWeight(random(1, 5)); // Random thickness

    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY); // Draw normal line
        line(width - mouseX, mouseY, width - pmouseX, pmouseY); // Create symmetry
    }
}