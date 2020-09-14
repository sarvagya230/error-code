class Game
{
    constructor()
    {


    }
    getstate()
    {
        var gamestate_ref=database.ref('gameState')
        gamestate_ref.on("value",function (data)
        {
            game_state=data.val();
        })

    }
    update (a)
    {
        database.ref('/').update({
        gameState:a
        })

    }
    start()
    {
        if(game_state===0)
        {
            player=new Player()
            player.getCount()
            form=new Form()
            form.display()
        }
    }
    play()
    {
        form.hide()
        text("game_start",150,150)
        Player.readPlayerInfo()
        if(all_player!=undefined)
        {
            var position=130
            for(var plr in all_player)
            {
            console.log("for loop working")
            position=position+30
            text(all_player[plr].name+":"+all_player[plr].distance,120,position)
            }

        }
        if(keyIsDown(UP_ARROW)&&player.index!=null)
        {
            player.distance=player.distance+50
            player.update()
        }

    }
    
}