let paragraph = document.querySelector(".paragraph");

let paraContent = paragraph.textContent;


let paraArray = paraContent.split(" ");

function swapWords() {
  const random1 = Math.floor(Math.random() * paraArray.length);
  const random2 = Math.floor(Math.random() * paraArray.length);

  [paraArray[random1], paraArray[random2]] = [paraArray[random2], paraArray[random1]];

  paraContent = paraArray.join(" ");
  paragraph.textContent = paraContent;
}

setInterval(swapWords, 1000);

document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector(".hidden-button");
  
  function randomPosition() {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
  }

  randomPosition(); 

});
  // button.addEventListener("mouseover", randomPosition);






