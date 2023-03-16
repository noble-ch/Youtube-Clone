let sandwitch = document.querySelector(".sandwitch");
let sideSection = document.getElementById("side-section");
let clicks = 0;
function hidenames() {
  clicks += 1;
  if (clicks % 2 == 0) {
    sideSection.style.width = "250px";
    sideSection.style.height = "400px";
  } else {
    sideSection.style.width = "50px";
    sideSection.style.height = "300px";
  }
}
