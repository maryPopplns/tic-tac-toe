function landing() {
  const BODY = document.body;
  const LANDING = document.createElement("div");
  const TIC = document.createElement("div");
  const TAC = document.createElement("div");
  const TOE = document.createElement("div");
  const TTT = [TIC, TAC, TOE];

  LANDING.setAttribute("id", "landing");
  TTT.forEach((e) => e.setAttribute("class", "ttt_containers"));

  BODY.prepend(LANDING);
  TTT.forEach((e) => LANDING.append(e));
}

export { landing };
