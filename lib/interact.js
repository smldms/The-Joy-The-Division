/*
VIDEO CAPTURE
*/
let fps = 24;
let capturer = new CCapture({
    framerate: fps,
    format: 'png',
    name: 'out',
    quality: 50,
    verbose: true
});

function keyTyped() {

    if (key === 'r') {
        capturer.start();
        print('go');
    } else if (key === 'x') {
        capturer.stop();
        capturer.save();
        noLoop();
    }
    else if (key === 's') {
        save();
        // save("image" + ".svg");
    }
}

function myFrame(x, y, w, pX, pY) {
    push()
    // drawingContext.globalCompositeOperation = 'color-burn';
    // drawingContext.filter = 'drop-shadow(0px 10px 5px #000)'

    noFill();
    stroke(negatif.bg)
    strokeWeight(w);
    rect(x, y, pX, pY);
    pop()
}

/*
GRAIN
*/
function grainy() {
    loadPixels();
    let d = pixelDensity();
    let halfImage = 4 * (width * d) * (height * d);
    for (let i = 0; i < halfImage; i += 4) {
        grainAmount = random(-23, 23);
        pixels[i] = pixels[i] + grainAmount;
        pixels[i + 1] = pixels[i + 1] + grainAmount;
        pixels[i + 2] = pixels[i + 2] + grainAmount;
        pixels[i + 3] = pixels[i + 3] + grainAmount
    }
    updatePixels();
}

function linearGradientFill(x1, y1, x2, y2, color1, color2) {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
}



function timer() {
    save('out.png')
    setTimeout(function () {
        location.reload(true);
    }, 2000);
}
