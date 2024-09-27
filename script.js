var img_carousel;

img_carousel = ["images/city1.avif", "images/city2.avif", "images/city3.avif"];
console.log(img_carousel);

let element_gallery = document.getElementById("gallery");
console.log(element_gallery);
element_gallery.setAttribute("src", img_carousel[0]);

document.getElementById("next-image").addEventListener("click", (event) => {
  let element_gallery2 = document.getElementById("gallery");
  img_carousel.push(img_carousel.shift());
  let element_gallery3 = document.getElementById("gallery");
  element_gallery3.setAttribute("src", img_carousel[0]);
});

document.getElementById("previous-image").addEventListener("click", (event) => {
  let element_gallery4 = document.getElementById("gallery");
  img_carousel.unshift(img_carousel.pop());
  let element_gallery5 = document.getElementById("gallery");
  element_gallery5.setAttribute("src", img_carousel[0]);
});
