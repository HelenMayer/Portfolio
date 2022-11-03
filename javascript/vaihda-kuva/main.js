let click = 0;
let text1 = "I choose a coffee";
let text2 = "I choose a tee";
function changePhoto() {
  click++;
  let image1 = document.querySelector("img");
  if (click % 2 != 0) {
    image1.setAttribute("src", `images/2.jpeg`);
    document.getElementById("btn").innerText = text2;
    document.getElementById("btn").style.backgroundColor = "#738603";
  } else {
    image1.setAttribute("src", `images/1.jpeg`);
    document.getElementById("btn").innerText = text1;
    document.getElementById("btn").style.backgroundColor = "#6A3F02";

  }
}
