const details = [
  {
    image: "detailImage1.png"
  },
  {
    image: "detailImage2.png"
  },
  {
    image: "detailImage3.png"
  },
  {
    image: "detailImage4.png"
  },
  {
    image: "detailImage5.png"
  },
  {
    image: "detailImage6.png"
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
