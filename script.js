const words = "Vivek you are super cool";
const ANIMATION_DURATION = 4000;

const characters = words.split("").forEach((char, i) => {
  function createElement(offset) {
    const div = document.createElement("div");
    div.innerText = char;
    div.classList.add("character");
    div.style.animationDelay = `-${i * (ANIMATION_DURATION / words.length) - offset}ms`;
    return div;
  }
  document.getElementById("spiral").append(createElement(0));
  document
    .getElementById("spiral2")
    .append(createElement(ANIMATION_DURATION / 2));
});
