import { TILES } from "./tiles.js";
import { unique } from "./unique.js";

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

  const CLICKED = Array.from(document.querySelectorAll(".colored")).map((e) => {
    e.addEventListener("click", (e) => {
      const TARGET = document.querySelector(`#${e.target.id}`);
      const NAMES = ["tic", "tac", "toe"];
      const RANDOM = NAMES[Math.floor(Math.random() * 3)];
      TARGET.style.animation = `var(--${RANDOM})`;
    });
  });

  setTimeout(() => {
    const FLICKER = setInterval(() => {
      const SET = unique(15);
      for (let i = 0; i < SET.length; i++) {
        const RANDOM_ID = TILES[SET[i]];
        // <-->
        const TILE = document.querySelector(RANDOM_ID);
        const ANIMATION_NAME = TILE.getAnimations()[0].animationName;
        if (ANIMATION_NAME === "tic") {
          TILE.style.animation = "var(--tac)";
        } else if (ANIMATION_NAME === "tac") {
          TILE.style.animation = "var(--toe)";
        } else {
          TILE.style.animation = "var(--tic)";
        }
        setTimeout(() => {
          TILE.style.animation = `var(--${ANIMATION_NAME})`;
        }, 800);
      }
      // <-->
    }, 2000);
  }, 4500);
}

export { animator };
