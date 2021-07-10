import { grid } from "./helpers/grid.js";
import { animator } from "./helpers/animator.js";
import { TILES } from "./helpers/tiles.js";
import { player_vs } from "./helpers/player_vs.js";
import {
  LANDING,
  TIC,
  TIC_T,
  TIC_I,
  TIC_C,
  TAC,
  TAC_T,
  TAC_A,
  TAC_C,
  TOE,
  TOE_T,
  TOE_O,
  TOE_E,
  TTT_CONTAINERS,
  TIC_CONTAINERS,
  TIC_IDS,
  TAC_CONTAINERS,
  TAC_IDS,
  TOE_CONTAINERS,
  TOE_IDS,
} from "./helpers/outline.js";

function landing() {
  LANDING.setAttribute("id", "landing");
  TTT_CONTAINERS.map((e) => e.setAttribute("class", "ttt_containers"));
  TIC_CONTAINERS.map((e, i) => {
    e.setAttribute("class", "ttt_letters");
    e.setAttribute("id", TIC_IDS[i]);
  });
  TAC_CONTAINERS.map((e, i) => {
    e.setAttribute("class", "ttt_letters");
    e.setAttribute("id", TAC_IDS[i]);
  });
  TOE_CONTAINERS.map((e, i) => {
    e.setAttribute("class", "ttt_letters");
    e.setAttribute("id", TOE_IDS[i]);
  });

  document.body.prepend(LANDING);
  TTT_CONTAINERS.map((e) => LANDING.append(e));
  for (let i = 0; i < 3; i++) {
    TIC.append(TIC_CONTAINERS[i]);
    TAC.append(TAC_CONTAINERS[i]);
    TOE.append(TOE_CONTAINERS[i]);
  }

  grid();
  animator();
  setTimeout(() => player_vs(), 4500);
}

export { landing };
