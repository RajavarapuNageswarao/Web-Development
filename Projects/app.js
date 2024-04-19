const bodyE1 = document.querySelector("body");
bodyE1.addEventListener("mousemove", (event) => {
  //position of set x and set y
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanE1 = document.createElement("span");
  //set and left to top
  spanE1.style.left = xPos + "px";
  spanE1.style.top = yPos + "px";
  //random numbers
  const size = Math.random() * 100;
  spanE1.style.width = size + "px";
  spanE1.style.height = size + "px";
  //append the child
  bodyE1.appendChild(spanE1);
  //require time set
  setTimeout(() => {
    spanE1.remove();
  }, 1000);
});
