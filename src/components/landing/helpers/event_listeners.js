import { landing } from "../landing.js";
import { flicker_stop, flicker_start } from "./flicker.js";

function event_listeners() {
  const PVP = document.querySelector("#player_vs_player");
  const PVC = document.querySelector("#player_vs_computer");
  const LANDING = document.querySelector("#landing");
  const BUTTONS_CONTAINER = document.querySelector("#player_vs_container");

  function remove_UI() {
    LANDING.remove();
    BUTTONS_CONTAINER.remove();
    flicker_stop();
    // setTimeout(() => {
    //   location.reload();
    //   landing();
    //   flicker_start();
    // }, 500);
    // <--create logic to set the all the tiles the correct color-->
  }

  PVP.addEventListener("click", () => {
    remove_UI();
  });
  PVC.addEventListener("click", () => {
    remove_UI();
  });
}

export { event_listeners };
