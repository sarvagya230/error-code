class Form
{
    constructor()
    {
       this.name_button=createButton("GET STARTED")
       this.Name_input=createInput("name:")
       this.greeting=createElement('h3')
      


    }
    hide()
    {
      this.name_button.hide()
      this.Name_input.hide()
      this.greeting.hide()

       
    }
    display()
    {
       var titel=createElement('h2')
       titel.html("CAR RACING GAME") 
       titel.position(130,20)
       this.Name_input.position(130,150)
       this.name_button.position(130,200)
       this.name_button.mousePressed(()=>{
      // this.Name_input.hide()
       //this.name_button.hide()
        player.name=this.Name_input.value()
        player_count++
        player.index=player_count
        player.update()
        
        player.update_count(player_count)
        this.greeting.html("WELCOME!"+player.name)


       
        
      this.greeting.position(130,100)


       })


    }
}