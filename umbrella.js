class umbrella {

    constructor (x,y){
        var option = {
            isStatic : true
        }
        this.image = loadImage("images/Walking Frame/walking_5.png")
        this.body = Bodies.circle(x,y,50,option)
        this.r = 50
        World.add(world,this.body)

    }
   display(){
       imageMode(CENTER)
       image(this.image,this.body.position.x,this.body.position.y+70,300,300)
   }

}