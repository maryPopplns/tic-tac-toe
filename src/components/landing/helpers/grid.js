function grid() {
  const TTT_LETTERS = Array.from(document.querySelectorAll(".ttt_letters"));
  TTT_LETTERS.forEach((e) => {
    for (let i = 0; i < 25; i++) {
      const GRID_TILE = document.createElement("div");
      GRID_TILE.setAttribute("id", e.id + i);
      GRID_TILE.setAttribute("class", "grid_tile");
      e.append(GRID_TILE);
    }
  });
}

export { grid };
