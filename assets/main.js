const inputValue = document.querySelector("#form-input");
const qrCodeShow = document.querySelector("#qr-code-generated");
const qrCodeContent = document.querySelector("#qr-code-content");

qrCodeContent.style.display = "none";

const handleClick = (event) => {
    console.log("button click!!!");
    qrCodeShow.innerHTML = "";
    console.log(inputValue.value);

    if(inputValue.value === "")
        return alert("you should add a url")

    const qrCode = new QRCode(qrCodeShow, {
	    text: inputValue.value,
	    width: 200,
	    height: 200,
	    colorDark : "#fff",
	    colorLight : "#2c7cfb",
	    correctLevel : QRCode.CorrectLevel.H
	});
    qrCodeContent.style.display = "flex";

    console.log(qrCode)
}

const handleTrash = (event) => {
    console.log("borrando entradas")
    qrCodeShow.innerHTML = "";
    inputValue.value = "";
    qrCodeContent.style.display = "none";
}

const handleDownload = (event) => {
    const qrCanvas = qrCodeContent.querySelector("canvas");

        if (qrCanvas) {
            const qrImage = qrCanvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = qrImage;
            link.download = "qr-code.png";
            link.click();
        }
    handleTrash();
}

