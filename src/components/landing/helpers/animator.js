import { TILES } from "./tiles.js";
import { unique } from "./unique.js";

function animator() {
  TILES.map((e) => {
    const TILE = document.querySelector(e);
    TILE.className += " colored";
  });

  (function ANIMATOR() {
    let count = 30;
    TILES.map((e) => {
      const ELEMENT = document.querySelector(e);
      const ANIMATION_NAME = ELEMENT.getAnimations()[0].animationName;
      ELEMENT.style.animation = "var(--clicked)";
      setTimeout(() => {
        ELEMENT.style.animation = `var(--${ANIMATION_NAME})`;
      }, count);
      count += 30;
    });
  })();

  const CLICKED = Array.from(document.querySelectorAll(".colored")).map((e) => {
    e.addEventListener("click", (e) => {
      const TILE = document.querySelector(`#${e.target.id}`);
      const ANIMATION_NAME = TILE.getAnimations()[0].animationName;
      if (ANIMATION_NAME === "tic") {
        TILE.style.animation = "var(--tac)";
      } else if (ANIMATION_NAME === "tac") {
        TILE.style.animation = "var(--toe)";
      } else if (ANIMATION_NAME === "toe") {
        TILE.style.animation = "var(--tic)";
      }
    });
  });
}

export { animator };
