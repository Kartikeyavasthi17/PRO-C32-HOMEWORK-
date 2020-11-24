class Stone{
    constructor(x,y,height,width)
    {
        var options={
        isStatic:false,
        restitution:0,
        friction:1,
        density:0.2,   
        }
    
        this.body =Bodies.rectangle(x,y,height,width,options);
        this.width = width;
        this.height = height;
        this.image =loadImage("wood1.png");
        this.visiblity =255;
        
        World.add(world, this.body);
      }
    display()
    {
      if(this.body.speed<3)
    {
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle);
      imageMode(CENTER);
      fill("red");
      image(this.image,0,0, this.width, this.height);
      pop();
    }
   else{
    World.remove(world, this.body);
    push();
    this.visiblity = this.visiblity - 5;
    tint(255,this.visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
   }
  }
  
  score(){
    if (this.visiblity < 0 && this.visiblity > -1005){
      score++;
    }
  }
}
