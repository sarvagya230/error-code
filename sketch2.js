var database;
var form, player, game
var game_state=0;
var player_count
var all_player
function setup()
{
    createCanvas(1000,500)
    database=firebase.database();
    game=new Game()
    game.getstate()
    game.start()
}
function draw()
{
 if (player_count === 4)
 {
     game.update(1)
 }
 if(game_state===1)
 {
     clear()
     game.play()

 }

}
