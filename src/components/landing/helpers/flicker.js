import { TILES } from "./tiles.js";
import { unique } from "./unique.js";

let FLICKER;

function flicker_start() {
  setTimeout(() => {
    FLICKER = setInterval(() => {
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
        }, 800);
      }
    }, 1500);
  }, 2500);
}
flicker_start();

function flicker_stop() {
  clearInterval(FLICKER);
}

export { flicker_stop, flicker_start };
