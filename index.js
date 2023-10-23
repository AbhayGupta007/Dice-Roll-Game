var button = document.querySelector("button");

button.addEventListener("click", playthedice);

function playthedice() {
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", "./images/dice" + d1 + ".png");
  document.querySelector(".img2").setAttribute("src", "./images/dice" + d2 + ".png");

  if (d1 > d2) 
  {
    document.querySelector("h1").textContent = "🚩 Player 1 win";
  }
  else if (d2 > d1) 
  {
    document.querySelector("h1").textContent = "Player 2 win 🚩";
  } 
  else 
  {
    document.querySelector("h1").textContent = "🚩Draw🚩";
  }
}