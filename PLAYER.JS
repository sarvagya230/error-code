class Player
{
    constructor()
    {
        this.index=null
        this.name=null
        this.distance=0


    }
    getCount()
    {
       var playerCount_ref=database.ref('playerCount')
       playerCount_ref.on("value",function(data)
       {
        player_count=data.val();
       }) 
    }
    update_count(c)
    {
        database.ref('/').update({
            playerCount:c

        })

    }
    update()
    {
        var player_index="players/player"+this.index;
        database.ref(player_index).set({

        name:this.name,
        
        distance:this.distance
        })

    }
    static readPlayerInfo()
    {
        var playerInfo=database.ref('player');
        playerInfo.on("value",(data)=>{
        all_player=data.val()
        })
    }
}

