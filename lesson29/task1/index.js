const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My photo");
  imgElem.src = imgSrc;
  const containerElem = document.querySelector(".page");
  containerElem.append(imgElem);
  imgElem.addEventListener("load", () => callback(null, imgElem));
  imgElem.addEventListener("error", () => callback("Image load is failed"));
};

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const sizeElem = document.querySelector(".image-size");

  sizeElem.textContent = `${data.width} x ${data.height}`;
};

// examples;
addImage(
  "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
  onImageLoaded
);
