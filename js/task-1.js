const btnElem = document.querySelector(".btn");

btnElem.addEventListener("click", (e) => {
  const instance = basicLightbox.create(`
    <img src="./images/Adgara.jpeg" width="800" height="1000">
  `);
  instance.show();
});
