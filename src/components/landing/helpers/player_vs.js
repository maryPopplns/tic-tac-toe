function player_vs() {
  const LANDING = document.querySelector("#landing");
  const PLAYER_VS_CONTAINER = document.createElement("div");
  const P_V_P = document.createElement("div");
  const P_V_P_TEXT_P = document.createElement("div");
  const P_V_P_TEXT_VS = document.createElement("div");
  const P_V_P_TEXT_P2 = document.createElement("div");
  const P_V_C = document.createElement("div");
  const P_V_C_TEXT_P = document.createElement("div");
  const P_V_C_TEXT_VS = document.createElement("div");
  const P_V_C_TEXT_COMPUTER = document.createElement("div");
  const GAME_MODES = [
    P_V_P_TEXT_P,
    P_V_P_TEXT_VS,
    P_V_P_TEXT_P2,
    P_V_C_TEXT_P,
    P_V_C_TEXT_VS,
    P_V_C_TEXT_COMPUTER,
  ];

  GAME_MODES.map((e) => {
    e.setAttribute("class", "game_modes");
  });
  PLAYER_VS_CONTAINER.setAttribute("id", "player_vs_container");
  P_V_P.setAttribute("id", "player_vs_player");
  P_V_P.setAttribute("class", "button");
  P_V_P_TEXT_P.textContent = "P";
  P_V_P_TEXT_VS.textContent = "VS";
  P_V_P_TEXT_P2.textContent = "P";
  P_V_C.setAttribute("id", "player_vs_computer");
  P_V_C.setAttribute("class", "button");
  P_V_C_TEXT_P.textContent = "P";
  P_V_C_TEXT_VS.textContent = "VS";
  P_V_C_TEXT_COMPUTER.textContent = "COMPUTER";

  LANDING.append(PLAYER_VS_CONTAINER);
  PLAYER_VS_CONTAINER.append(P_V_P);
  P_V_P.append(P_V_P_TEXT_P);
  P_V_P.append(P_V_P_TEXT_VS);
  P_V_P.append(P_V_P_TEXT_P2);
  PLAYER_VS_CONTAINER.append(P_V_C);
  P_V_C.append(P_V_C_TEXT_P);
  P_V_C.append(P_V_C_TEXT_VS);
  P_V_C.append(P_V_C_TEXT_COMPUTER);
}

export { player_vs };
