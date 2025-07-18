const details = [
  {
    image: "images/detailImage1.png"
  },
  {
    image: "images/detailImage2.png"
  },
  {
    image: "images/detailImage3.png"
  },
  {
    image: "images/detailImage4.png"
  },
  {
    image: "images/detailImage5.png"
  },
  {
    image: "images/detailImage6.png"
  }
];

function showDetail(index) {
  const overlay = document.getElementById("detailBox");
  const detailImage = document.getElementById("detailImage");

  detailImage.src = details[index].image;
  overlay.style.display = "flex";
}
function hideDetail() {
  document.getElementById("detailBox").style.display = "none";
}
