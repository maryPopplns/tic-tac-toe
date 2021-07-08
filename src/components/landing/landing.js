function landing() {
  const BODY = document.body;
  const LANDING = document.createElement("div");
  const TIC = document.createElement("div");
  const TIC_T = document.createElement("div");
  const TIC_I = document.createElement("div");
  const TIC_C = document.createElement("div");
  const TAC = document.createElement("div");
  const TAC_T = document.createElement("div");
  const TAC_A = document.createElement("div");
  const TAC_C = document.createElement("div");
  const TOE = document.createElement("div");
  const TOE_T = document.createElement("div");
  const TOE_O = document.createElement("div");
  const TOE_E = document.createElement("div");
  const TTT_CONTAINERS = [TIC, TAC, TOE];
  const TIC_CONTAINERS = [TIC_T, TIC_I, TIC_C];
  const TIC_IDS = ["tic_t", "tic_i", "tic_c"];
  const TAC_CONTAINERS = [TAC_T, TAC_A, TAC_C];
  const TAC_IDS = ["tac_t", "tac_a", "tac_c"];
  const TOE_CONTAINERS = [TOE_T, TOE_O, TOE_E];
  const TOE_IDS = ["toe_t", "toe_o", "toe_e"];

  // <-->

  LANDING.setAttribute("id", "landing");
  TTT_CONTAINERS.forEach((e) => e.setAttribute("class", "ttt_containers"));
  TIC_CONTAINERS.forEach((e, i) => {
    e.setAttribute("class", "ttt_letters");
    e.setAttribute("id", TIC_IDS[i]);
  });
  TAC_CONTAINERS.forEach((e, i) => {
    e.setAttribute("class", "ttt_letters");
    e.setAttribute("id", TAC_IDS[i]);
  });
  TOE_CONTAINERS.forEach((e, i) => {
    e.setAttribute("class", "ttt_letters");
    e.setAttribute("id", TOE_IDS[i]);
  });

  // <-->

  BODY.prepend(LANDING);
  TTT_CONTAINERS.forEach((e) => LANDING.append(e));
  for (let i = 0; i < 3; i++) {
    TIC.append(TIC_CONTAINERS[i]);
    TAC.append(TAC_CONTAINERS[i]);
    TOE.append(TOE_CONTAINERS[i]);
  }
}

export { landing };
