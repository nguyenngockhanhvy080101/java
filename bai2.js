function zoomIn(img) {
  img.style.width = 150 * 1.1 + "px";
}

function zoomOut(img) {
  img.style.width = "150px";
}

function showDateTime() {
  let now = new Date();
  alert("Ngày giờ hiện tại: " + now.toLocaleString("vi-VN"));
}

function toUpperCaseText() {
  let input = document.getElementById("txtInput");
  input.value = input.value.toUpperCase();
}
