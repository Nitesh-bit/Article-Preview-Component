const shareButton = document.getElementById("btn1");
const shareToggle = document.querySelector(".share-section");
const shareLogo = document.querySelector(".share-btn");

let flag = 0;

shareButton.addEventListener("click", () => {
  shareToggle.classList.toggle("toggle-visibility");
  if (flag === 1) {
    shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareLogo.src = "./images/icon-share.svg";
    flag = 0;
  } else {
    shareButton.style.backgroundColor = "hsla(217, 19%, 47%, 0.851)";
    shareLogo.src = "./images/arrow-redo-outline.svg";
    flag = 1;
  }
});
