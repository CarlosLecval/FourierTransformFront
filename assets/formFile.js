function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

$(document).ready(function () {
    const fileSelector = document.getElementById('file-selector');
    fileSelector.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        uuid = uuidv4();
        formData.append("name", uuid);
        fetch(`http://localhost:5000/fft`, {
            method: 'POST',
            mode: "cors",
            body: formData
        })
        .then(response => {
            response.json()
        })
        .then(data => {
            document.cookie = "imageName=" + uuid;
            window.location.href = "indexDos.html";
        })
    });
})