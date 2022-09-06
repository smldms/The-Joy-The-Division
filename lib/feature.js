//////////////PALETTE
let palette = {
    n: fxrand(),
    clr: [],
    name: ''
}
if (palette.n < 0.1*1) {
    palette.clr = ["#080C26", "#0A3873", "#15AEBF", "#F2DEA2", "#F25041"],
    palette.name = "10"
}
else if (palette.n < 0.1*2) {
    palette.clr = ["#A6727C", "#BF0436", "#D9325E", "#02060D", "#F2B279"],
    palette.name = "9"
}
else if (palette.n <0.1*3) {
    palette.clr = ["#59454C", "#4F4059", "#F2E6C2", "#BFA38A", "#402D22"],
    palette.name = "8"
}
else if (palette.n < 0.1*4) {
    palette.clr = ["#8C3545", "#D98BB6", "#8149A6", "#030526", "#071540"],
    palette.name = "7"
}
else if (palette.n < 0.1*5) {
    palette.clr = ["#D91E41", "#F21D56", "#401323", "#F2911B", "#F25F29"],
    palette.name = "6"
}
else if (palette.n < 0.1*6) {
    palette.clr = ["#232126", "#BDBF84", "#F0F2AE", "#F0F2AE", "#594B43"],
    palette.name = "5"
}
else if (palette.n < 0.1*7) {
    palette.clr = ["#00010D", "#111426", "#49538C", "#2E3559", "#9FB3BF"]
    palette.name = "4"
}
else if (palette.n < 0.1*8) {
    palette.clr = ["#A63740", "#73A2BF", "#F2D785", "#D95A2B", "#8C442A"],
        palette.name = "3"
}
else if (palette.n < 0.1*9) {
    palette.clr = ["#0D0D0C", "#E8E6CF", "#FFFCF0", "#E8E0CF", "#FFF4E3"],
        palette.name = "2"
}
else {
    palette.clr = ["#F2F2F2", "#737373", "#404040", "#262626", "#0D0D0D"],
        palette.name = "1"
}

///////////NEGATIF
let negatif = {
    n: fxrand(),
    val:0,
    str:0,
    clr:0,
    bg:0,
    name: ''
}

if (negatif.n < 0.90) {
    negatif.name = "ON";
    negatif.val = 1
    negatif.str = 255
    negatif.clr = 255
    negatif.bg = 0
}
else {
    negatif.name = "OFF"; 
    negatif.val = 0
    negatif.str = 0
    negatif.clr = 0
    negatif.bg = 255
}

///////////LINE SPACING
let scl = {
    n: fxrand(),
    val:0,
    name: ''
}

if (scl.n < 0.25) {
    scl.val = 5
}
else if (scl.n < 0.5) {
    scl.val = 8
}
else {
    scl.val = 10
}


///////////ROW SPACING
let scl2 = {
    n: fxrand(),
    val:0,
    name: ''
}

if (scl2.n < 0.25) {
    scl2.val = 2
}
else if (scl2.n < 0.5) {
    scl2.val = 5
}
else {
    scl2.val = 10
}

///////////RELIEF
let  turb= {
    n: fxrand(),
    val:0.001,
    name: ''
}

if (turb.n < 0.25) {
    turb.val = 0.003
}
else if (turb.n < 0.5) {
    turb.val = 0.005
}
else {
    turb.val = 0.008
}

///////////TRACE
let trace = {
    n: fxrand(),
    val:0,
    name: ''
}

if (trace.n < 0.25) {
    trace.val = 10
}
else if (trace.n < 0.5) {
    trace.val = 25
}
else if (trace.n < 0.75) {
    trace.val = 50
}
else {
    trace.val = 100
}