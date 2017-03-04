function Platform(){
	
	console.log("Platform");
	

	this.x = VAR.W/2;
	this.y = VAR.H/1.1;
	
	this.modX = 0;
	


}

Platform.prototype.draw = function() {
	
	
	if(Game.key_37&&this.x>100&&this.x<=VAR.W-100){
		
		this.modX = this.modX-2;	
	}
	else if(Game.key_39&&this.x<VAR.W-100&&this.x>=100){
		this.modX = this.modX+2;
		
	}
	else if(this.x<(VAR.W-100)&&this.x>100){
		this.modX = this.modX*0.9
		
		this.modX = Math.abs(this.modX)<0.0001 ? 0 : this.modX
	}
	else {
		this.modX=0;
	}
	if(this.x<100){
		this.x=100;
		this.modX=1;
	}
	
	if(this.x>VAR.W-100){
		this.x=VAR.W-100;
		this.modX=-1;
	}
	
	this.x+=this.modX
	
	
	Game.ctx.beginPath()
	Game.ctx.rect(this.x-100, this.y-20, 200, 40);
	Game.ctx.fillStyle = 'green';
	Game.ctx.fill();
	Game.ctx.closePath()
	Game.ctx.stroke()
	
	VAR.platformX=this.x;
	VAR.platformY=this.y;
};
