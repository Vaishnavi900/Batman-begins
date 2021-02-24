class drops {

    constructor(x,y){
        var option = {
            friction : 0.01,
            restituition : 0.1
        }
        this.body = Bodies.circle(x,y,5,option)
        this.r = 5
        World.add (world, this.body)
    }
    update ()
{
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x : random(0,400),y : radom(0,400)})
    }
}
display(){

  fill ("blue")
  ellipseMode(RADIUS)
  ellipse(this.body.position.x,this.body.position.x,this.r,this.r)

}
}