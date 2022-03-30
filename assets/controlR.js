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

$(document).ready(function () {
    let imageName = getCookie("imageName");
    var imagen = new Image();
    imagen.src = 'https://fourierbucket.s3.us-west-2.amazonaws.com/bg_image_r_' + imageName + '.png';
    var clic = false;
    var xCoord, yCoord = "";
    var canvas = document.getElementById("gameCanvasR");
    // canvas.height = imagen.height;
    // canvas.width = imagen.width;
    var cntx = canvas.getContext("2d");
    cntx.strokeStyle = "black";
    cntx.lineWidth = 10;
    cntx.lineCap = "round";
    cntx.fillStyle = "rgba(255, 255, 255, 0)";
    cntx.fillRect(0, 0, canvas.width, canvas.height);

    $("#gameCanvasR").mousedown(function (canvas) {
        clic = true;
        cntx.save();
        xCoord = canvas.pageX - this.offsetLeft;
        yCoord = canvas.pageY - this.offsetTop
    });

    $(document).mouseup(function () {
        clic = false
    });

    $(document).click(function () {
        clic = false
    });

    $("#gameCanvasR").mousemove(function (canvas) {
        if (clic == true) {
            cntx.beginPath();
            cntx.moveTo(canvas.pageX - this.offsetLeft, canvas.pageY - this.offsetTop);
            cntx.lineTo(xCoord, yCoord);
            cntx.stroke();
            cntx.closePath();
            xCoord = canvas.pageX - this.offsetLeft;
            yCoord = canvas.pageY - this.offsetTop
        }
    });

    $("#limpiarR").click(function () {
        cntx.clearRect(0, 0, canvas.width, canvas.height);
        return false;
    })
})