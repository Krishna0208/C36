class Player {
    constructor() {}
  
    getCount() {
      // go to database and take value of gameState --> update(state)
      var playerCountRef = database.ref("playerCount");
      playerCountRef.on("value", function (data) {
        playerCount = data.val();
      });
    }
  
    updateCount(count) {
      database.ref("/").update({
        playerCount: count,
      });
    }
  
    update(name) {
      var playerIndex = "player"+playerCount;
      database.ref(playerIndex).set({
      name: name
      })
    }
  }
  