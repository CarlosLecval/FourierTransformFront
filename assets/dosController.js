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

function getResult()
{
    document.getElementById("res").src = "";
    let imageName = getCookie("imageName");
    r = document.getElementById("gameCanvasR").toDataURL();
    g = document.getElementById("gameCanvasB").toDataURL();
    b = document.getElementById("gameCanvas").toDataURL();
    const formData = new FormData();
    formData.append("imageName", imageName);
    formData.append("canvasR", r);
    formData.append("canvasG", g);
    formData.append("canvasB", b);
    fetch(`http://localhost:5000/ifft`, {
        method: 'POST',
        mode: "cors",
        body: formData
    })
    .then(response => {
        response.json()
    })
    .then(data => {
        document.getElementById("parrafoOutput").hidden = false;
        document.getElementById("res").hidden = false;
        document.getElementById("res").src = "https://fourierbucket.s3.us-west-2.amazonaws.com/" + imageName + "_transformed.png";
    })
}