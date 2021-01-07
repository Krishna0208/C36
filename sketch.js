var database, playerCount, form, player, game;
var gameState = 0;

function setup(){
  database = firebase.database();
  createCanvas(400,400);
  
  game = new Game()
  game.getState();
  game.start();


}

function draw(){
  background(0);
  
}
