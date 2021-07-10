import { landing } from "../landing.js";

function event_listeners() {
  const PVP = document.querySelector("#player_vs_player");
  const PVC = document.querySelector("#player_vs_computer");
  const LANDING = document.querySelector("#landing");
  const BUTTONS_CONTAINER = document.querySelector("#player_vs_container");

  function remove_UI() {
    LANDING.remove();
    BUTTONS_CONTAINER.remove();
    // setTimeout(() => {
    //   landing();
    // }, 1000);
  }

  PVP.addEventListener("click", () => {
    remove_UI();
  });
  PVC.addEventListener("click", () => {
    remove_UI();
  });
}

export { event_listeners };
