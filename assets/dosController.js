function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function dosload() {
    let imageName = getCookie("imageName");
    var imagenB = new Image();
    imagenB.src = 'https://fourierbucket.s3.us-west-2.amazonaws.com/bg_image_b_' + imageName + '.png';
    var imagen = new Image();
    imagen.src = 'https://fourierbucket.s3.us-west-2.amazonaws.com/bg_image_r_' + imageName + '.png';
    var imagenG = new Image();
    imagenG.src = 'https://fourierbucket.s3.us-west-2.amazonaws.com/bg_image_g_' + imageName + '.png';
    document.getElementById("imgInput").src = "https://fourierbucket.s3.us-west-2.amazonaws.com/" + imageName + ".png";
    document.getElementById("gameCanvasR").style = "background: url("+ imagen.src + ")";
    document.getElementById("gameCanvasB").style = "background: url("+ imagenG.src +")";
    document.getElementById("gameCanvas").style = "background: url("+ imagenB.src +")";
    var canvasB = document.getElementById("gameCanvas");
    canvasB.height = imagenB.height;
    canvasB.width = imagenB.width;
    var canvasG = document.getElementById("gameCanvasB");
    canvasG.height = imagenG.height;
    canvasG.width = imagenG.width;
    var canvas = document.getElementById("gameCanvasR");
    canvas.height = imagen.height;
    canvas.width = imagen.width;
}