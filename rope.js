class Rope{

constructor(body1,body2,offsetX,offsetY){

this.offsetX=offsetX
this.offsetY=offsetY
var options ={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}



}
this.rope=Constrait.create(options)
	World.add(world,this.rope)

display()




}











}