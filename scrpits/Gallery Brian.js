let x = [
  "../images/Brian 2.jpg",
  "../images/Brian 3.jpg",
  "../images/Brian 4.jpg",
  "../images/Brian gallery1.jpg",
  "../images/Brian gallery2.jpg",
  "../images/Brian gallery3.jpg",
  "../images/Brian gallery4.jpg",
  "../images/Brian gallery5.jpg",
  "../images/Brian gallery6.jpg",
  "../images/Brian 1.jpg",
];
i = 0;

function next() {
  i++;
  if (i == x.length) {
    i = 0;
  }
  document.getElementById("idGallery").src = x[i];
}

function back() {
  if (i == 0) {
    i = x.length;
  }
  i--;
  document.getElementById("idGallery").src = x[i];
}
