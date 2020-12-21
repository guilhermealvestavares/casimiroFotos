const imageGrid = document.querySelectorAll(".imageGrid");

const fieldtext = document.querySelector(".fieldText");

const textInImage = document.querySelector(".textInImage");

fieldtext.addEventListener("keyup", function () {
  textInImage.innerHTML = fieldtext.value;
});

for (let i = 0; i < imageGrid.length; i++) {
  imageGrid[i].addEventListener("click", function () {
    console.log(imageGrid[i].src);
    document.querySelector(".mainImage").src = imageGrid[i].src;
  });
}
