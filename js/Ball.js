function Ball(){
	console.log("Ball1");
	this.r = 8;
	this.directionX= binaryRand();
	this.directionY= -1;
	this.x = VAR.W/2;
	this.y = VAR.H/2;
	this.speed=10;
}

Ball.prototype.draw = function() {
	//console.log("platformax "+VAR.platformX+" pozycjax "+this.x);
	//console.log("platformay "+VAR.platformY+" pozycjay "+this.y);

	if(this.y>=(VAR.platformY-40)&&this.y<=(VAR.platformY-20)&&this.x>=(VAR.platformX-100-this.r)&&this.x<=(VAR.platformX+100+this.r)){
		this.directionY=-this.directionY;
		playJump();
	}
	if(this.y<=this.r)this.directionY=-this.directionY;
	if(this.x<=this.r)this.directionX=-this.directionX;
	if(this.x-this.r>=VAR.W)this.directionX=-this.directionX;
	
	
	
      Game.ctx.beginPath();
      Game.ctx.arc(this.x , this.y , this.r*2, 0, 2 * Math.PI, false);
      Game.ctx.fillStyle = 'blue';
      Game.ctx.fill();
	  Game.ctx.closePath();
	  this.x=this.x+this.directionX*this.speed;
	  this.y=this.y+this.directionY*this.speed;
	  this.speed=this.speed+0.01; 
	
	for(var r in Obstacle.all){
		var hited=false;
		if(Obstacle.all[r].hitTest(this.x-this.r,this.y)){
			Obstacle.all[r].remove();
			hited=true;
		}
	    if(!hited&&Obstacle.all[r].hitTest(this.x+this.r,this.y)){
			Obstacle.all[r].remove();
			hited=true;
		}
		
	}
};


function binaryRand(){
	return [Math.floor(Math.random()*2)===0?-1:1];
			};
