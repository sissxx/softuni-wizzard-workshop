function start(state, game) {
  game.createWizard(state.wizard);

  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}

function gameLoop(state, game) {
  // Move wizard
  const { wizard } = state;
  const { wizardElement } = game;

  if (state.keys.KeyD) {
    wizard.posX += 10;
  }

  // Render wizard
  wizardElement.style.left = wizard.posX + "px";


  window.requestAnimationFrame(gameLoop.bind(null, state, game));
}
