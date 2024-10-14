const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Select the <ul> element with the class 'gallery'
const ulGallery = document.querySelector("ul.gallery");

let galleryHTML = "";

// Iterate through each image and construct the HTML
images.forEach(image => {
  galleryHTML += `<li><img src="${image.url}" alt="${image.alt}"></li>`;
});

// Insert the constructed HTML into the <ul> element in one operation
ulGallery.insertAdjacentHTML("beforeend", galleryHTML);
