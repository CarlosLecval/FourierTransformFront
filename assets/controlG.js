
$(document).ready(function () {
    // var imagen = document.getElementById('img_r');
    var imagen = new Image();
    imagen.src = 'https://fourierbucket.s3.us-west-2.amazonaws.com/bg_image_b_7e2feae7-5e79-41fc-a8be-b2a83075a12b.png';
    var clic = false;
    var xCoord, yCoord = "";
    var canvas = document.getElementById("gameCanvas");
    canvas.height = imagen.height;
    canvas.width = imagen.width;
    var cntx = canvas.getContext("2d");
    cntx.strokeStyle = "black";
    cntx.lineWidth = 10;
    cntx.lineCap = "round";
    cntx.fillStyle = "rgba(255, 255, 255, 0)";
    cntx.fillRect(0, 0, canvas.width, canvas.height);

    $("#gameCanvas").mousedown(function (canvas) {
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

    $("#gameCanvas").mousemove(function (canvas) {
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

    $("#limpiar").click(function () {
        cntx.clearRect(0, 0, canvas.width, canvas.height);
        return false;
    })
})