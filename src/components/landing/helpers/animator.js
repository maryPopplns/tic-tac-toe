import { TILES } from "./tiles.js";

function animator() {
  TILES.map((e) => {
    const TILE = document.querySelector(e);
    TILE.className += " colored";
  });

  (function ANIMATOR() {
    let count = 50;
    TILES.map((e) => {
      const ELEMENT = document.querySelector(e);
      const ANIMATION_NAME = ELEMENT.getAnimations()[0].animationName;
      ELEMENT.style.animation = "var(--clicked)";
      setTimeout(() => {
        ELEMENT.style.animation = `var(--${ANIMATION_NAME})`;
      }, count);
      count += 50;
    });
  })();

  const COLORED = Array.from(document.querySelectorAll(".colored")).map((e) => {
    e.addEventListener("click", (e) => {
      const TARGET = document.querySelector(`#${e.target.id}`);
      const ANIMATION_NAME = TARGET.getAnimations()[0].animationName;
      TARGET.style.animation = "var(--clicked)";
      setTimeout(() => {
        TARGET.style.animation = `var(--${ANIMATION_NAME})`;
      }, 750);
    });
  });

  // const FLICKER = setInterval(() => {
  //   const RANDOM_ID = TILES[Math.floor(Math.random() * TILES.length)];
  //   const TILE = document.querySelector(RANDOM_ID);
  //   console.log(TILE);
  // }, 1000);
}

export { animator };
