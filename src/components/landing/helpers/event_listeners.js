function event_listeners() {
  const PVP = document.querySelector("#player_vs_player");
  const PVC = document.querySelector("#player_vs_computer");

  function pvp_handler(e) {
    console.log(e);
  }

  function pvc_handler(e) {
    console.log(e);
  }

  PVP.addEventListener("click", pvp_handler);
  PVC.addEventListener("click", pvc_handler);
}

export { event_listeners };
