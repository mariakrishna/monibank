const cameraButton = document.querySelector("[data-video-botao]");
const cameraField = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const takePictureButton = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const message = document.querySelector("[data-mensagem]");
const sendPictureButton = document.querySelector("[data-enviar]");

let imgURL = ''

cameraButton.addEventListener("click", async function (){
  const initVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

  cameraButton.style.display = 'none';
  cameraField.style.display = 'block';

  video.srcObject = initVideo;
});

takePictureButton.addEventListener('click', function() {
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

  imgURL = canvas.toDataURL("image/jpeg");
  cameraField.style.display = 'none';
  message.style.display = 'block';
})

sendPictureButton.addEventListener('click', () => {
    const recieveExistingData = localStorage.getItem("cadastro");
    const convertReturn = JSON.parse(recieveExistingData);

    convertReturn.imagem = imgURL;

    localStorage.setItem('cadastro', JSON.stringify(convertReturn));

    window.location.href = "./abrir-conta-form-3.html"
})