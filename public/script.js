const imageInput = document.getElementById('image-input');
const memeCanvas = document.getElementById('meme-canvas');
const ctx = memeCanvas.getContext('2d');

imageInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;
    img.onload = () => {
      memeCanvas.width = img.width;
      memeCanvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
    };
  };

  reader.readAsDataURL(file);
});
