class Game {
  constructor() {}

  getState() {
    // go to database and take value of gameState --> update(state)
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  start() {
  if (gameState === 0) {
  player = new Player();
  player.getCount();
  form = new Form();
  form.display();
  }  
  }
}
