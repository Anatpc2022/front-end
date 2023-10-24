const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img")

//Eventos

//Gerar código qr code
function generateQrCode() {
 const qrCodeInputValue = qrCodeInput.value;

// ver se o código qr code ta valido
 if (!qrCodeInputValue) return;

 //faz o load
 qrCodeBtn.innerText = "Gerando código...";

 //acha a imagem pela api
 qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue} `;

 //mostra na tela
 qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código gerado!";
 })
}

qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        generateQrCode();
    }
})
//Limpar area do qr code
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar Qr Code";  
    }
})