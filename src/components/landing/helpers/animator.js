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

  setTimeout(() => {
    const FLICKER = setInterval(() => {
      const RANDOM_NUM = Math.floor(Math.random() * 40) + 1;
      const SET = unique(RANDOM_NUM);
      for (let i = 0; i < SET.length; i++) {
        const RANDOM_ID = TILES[SET[i]];
        const TILE = document.querySelector(RANDOM_ID);
        const ANIMATION_NAME = TILE.getAnimations()[0].animationName;
        if (ANIMATION_NAME === "tic") {
          TILE.style.animation = "var(--tac)";
        } else if (ANIMATION_NAME === "tac") {
          TILE.style.animation = "var(--toe)";
        } else if (ANIMATION_NAME === "toe") {
          TILE.style.animation = "var(--tic)";
        }

        // <-no perm change on tiles->
        setTimeout(() => {
          TILE.style.animation = `var(--${ANIMATION_NAME})`;
        }, 700);
      }
      // <-->
    }, 1500);
  }, 2000);
}

export { animator };
