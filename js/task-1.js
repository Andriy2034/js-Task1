const images = [
  {
    preview: "../images/Adgara.jpeg",
    original: "../images/Adgara.jpeg",
  },
  {
    preview: "../images/Adgara2.jpg",
    original: "../images/Adgara2.jpg",
  },
  {
    preview: "../images/ves1.jpeg",
    original: "../images/ves1.jpeg",
  },
  {
    preview: "../images/ves2.jpeg",
    original: "../images/ves2.jpeg",
  },
  {
    preview: "../images/ves3.jpeg",
    original: "../images/ves3.jpeg",
  },
  {
    preview: "../images/photo_1.jpg",
    original: "../images/photo_1.jpg",
  },
  {
    preview: "../images/photo_4.jpg",
    original: "../images/photo_4.jpg",
  },
  {
    preview: "../images/photo_5.jpg",
    original: "../images/photo_5.jpg",
  },
  {
    preview: "../images/photo_6.jpg",
    original: "../images/photo_6.jpg",
  },
  {
    preview: "../images/photo_7.jpg",
    original: "../images/photo_7.jpg",
  },
  {
    preview: "../images/photo_8.jpg",
    original: "../images/photo_8.jpg",
  },
  {
    preview: "../images/photo_9.jpg",
    original: "../images/photo_9.jpg",
  },
  {
    preview: "../images/photo_10.jpg",
    original: "../images/photo_10.jpg",
  },
  {
    preview: "../images/photo_11.jpg",
    original: "../images/photo_11.jpg",
  },
  {
    preview: "../images/photo_12.jpg",
    original: "../images/photo_12.jpg",
  },
  {
    preview: "../images/photo_13.jpg",
    original: "../images/photo_13.jpg",
  },
  {
    preview: "../images/photo_14.jpg",
    original: "../images/photo_14.jpg",
  },
  {
    preview: "../images/photo_15.jpg",
    original: "../images/photo_15.jpg",
  },
  {
    preview: "../images/photo_16.jpg",
    original: "../images/photo_16.jpg",
  },
  {
    preview: "../images/photo_17.jpg",
    original: "../images/photo_17.jpg",
  },
  {
    preview: "../images/photo_18.jpg",
    original: "../images/photo_18.jpg",
  },
  {
    preview: "../images/photo_19.jpg",
    original: "../images/photo_19.jpg",
  },
  {
    preview: "../images/photo_20.jpg",
    original: "../images/photo_20.jpg",
  },
  {
    preview: "../images/photo_21.jpg",
    original: "../images/photo_21.jpg",
  },
  {
    preview: "../images/photo_22.jpg",
    original: "../images/photo_22.jpg",
  },
  {
    preview: "../images/photo_23.jpg",
    original: "../images/photo_23.jpg",
  },
  {
    preview: "../images/photo_24.jpg",
    original: "../images/photo_24.jpg",
  },
  {
    preview: "../images/photo_25.jpg",
    original: "../images/photo_25.jpg",
  },
  {
    preview: "../images/photo_26.jpg",
    original: "../images/photo_26.jpg",
  },
  {
    preview: "../images/photo_27.jpg",
    original: "../images/photo_27.jpg",
  },
  {
    preview: "../images/photo_28.jpg",
    original: "../images/photo_28.jpg",
  },
  {
    preview: "../images/photo_29.jpg",
    original: "../images/photo_29.jpg",
  },
  {
    preview: "../images/photo_30.jpg",
    original: "../images/photo_30.jpg",
  },
  {
    preview: "../images/photo_31.jpg",
    original: "../images/photo_31.jpg",
  },
  {
    preview: "../images/photo_32.jpg",
    original: "../images/photo_32.jpg",
  },
  {
    preview: "../images/photo_33.jpg",
    original: "../images/photo_33.jpg",
  },
];

const ulElem = document.querySelector(".gallery");

const markup = images
  .map((image) => {
    return `<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
    />
  </a>
</li>`;
  })
  .join("");

ulElem.insertAdjacentHTML("beforeend", markup);

ulElem.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    e.preventDefault();
  }
});

ulElem.addEventListener("click", (e) => {
  images.forEach((image) => {
    if (e.target.dataset.source === image.original) {
      const instance = basicLightbox.create(`
        <img src="${image.original}">`);
      instance.show();
    }
  });
});
