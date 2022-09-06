let _seed;
let xOff = 50
let d; let g;

function setup() {
    _seed = floor(fxrand() * 999999)
    randomSeed(_seed)
    noiseSeed(_seed)
    // cnv = createCanvas(windowWidth, windowHeight);
    cnv = createCanvas(800,800);
    angleMode(DEGREES)
    background(23)
    // drawingContext.filter = 'invert('+negatif.val+')'
    noFill()

    push()
    stroke(negatif.str)
    let sclX = 1
    for (n = -height / 2; n < height; n += scl.val) {
        beginShape();
        push()
        // drawingContext.filter = 'blur (10px) drop-shadow(0px 10px 5px #000)'
        for (i = -sclX; i < width + sclX; i += sclX) {
            d = dist(i, n, width / 2, n)
            let noisy = map(d, -width / 2, width / 2, -width / 2, width / 2)
            vertex(i, n - noise(n + i * noisy) * (1 - d))
        }
        pop()
        endShape();
    }
    pop()

    push()
    g = createGraphics(width, height)
    push()
    rectMode(CENTER)
    g.fill(negatif.bg)
    fill(negatif.bg)
    drawingContext.filter = 'drop-shadow(0px 0px 1px #000)'
    rect(width / 2, height / 2, width * 0.5, height * 0.70)
    pop()
    g.stroke(negatif.str)
    g.noFill()
    let sclY = 5
    for (n = 0; n < height; n += 1 + fxrand() * scl2.val) {
        g.beginShape();
        
        for (i = -sclX; i < g.width + sclY; i += sclY) {
            push()
            d = dist(i, n, g.width / 2, n)
            let noisy = map(d, -g.width / 2, g.width / 2, -g.width / 2, g.width / 2)
            g.vertex(i, n - noise(n + i) / (1 / -d))
            pop()
        }
        g.endShape();
    }
    image(g, 0, 0)
    pop()
    
    push()
    rectMode(CENTER)
    myFrame(width / 2, height / 2, height / 500, width * 0.95, height * 0.95)
    fill(negatif.bg)
    linearGradientFill(width/2,0, width/2, height, random(palette.clr), random(palette.clr))
    blendMode(OVERLAY)
    rect(width / 2, height / 2, width, height)
    pop()
    grainy()
    fxpreview()
    // timer()
}