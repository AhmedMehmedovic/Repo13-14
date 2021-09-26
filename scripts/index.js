var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-image");
var arr = Array.from(document.querySelectorAll(".imgT"));

arr.forEach((item) => {
  var id = item.id;
  item.onclick = function () {
    modal.style.display = "block";
    modalImg.src = "../src/" + id + ".html";
  };
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};