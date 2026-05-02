const btnElem = document.querySelector(".btn");
const btnElem2 = document.querySelector(".btn-name");

btnElem.addEventListener("click", (e) => {
  const instance = basicLightbox.create(`
    <img src="./images/Adgara.jpeg" width="800" height="1000">
  `);
  instance.show();
});

btnElem2.addEventListener("click", (e) => {
  const instance = basicLightbox.create(`
    <img src="./images/Adgara2.jpg" width="800" height="1000">
  `);
  instance.show();
});
