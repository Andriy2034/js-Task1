const btnElem = document.querySelector(".btn");
const btnElem2 = document.querySelector(".btn-name");
const btnElem3 = document.querySelector(".btn-secondary");

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

btnElem3.addEventListener("click", (e) => {
  const instance = basicLightbox.create(`
    <img src="./images/Avantage4.jpg" width="800" height="1000">
  `);
  instance.show();
});
