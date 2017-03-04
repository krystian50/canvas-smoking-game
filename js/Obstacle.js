
Obstacle.all={};

Obstacle.count = 0;



function Obstacle(size, x, y){
	
	console.log("Obstacle");
	
	Obstacle.count++;
	this.id=Obstacle.count;
	
	
	this.size = size;
	this.x = x;
	this.y = y;

	this.modX=1;
	this.modY=1;
	Obstacle.all[this.id] = this;
}



Obstacle.prototype.draw = function() {
	
	if(this.x>VAR.W)this.modX=-this.modX;
	if(this.y>VAR.H/2)this.modY=-this.modY;
	if(this.y<0)this.modY=-this.modY;
	
		
	this.x =this.x +this.modX;
	this.y =this.y +this.modY;
	var temp=this.size/2;
	Game.ctx.beginPath()
	Game.ctx.rect(this.x-temp, this.y-temp, this.size, this.size);
	Game.ctx.fillStyle = 'red';
	Game.ctx.fill();
	Game.ctx.closePath()
	Game.ctx.stroke()
	
	
	Game.ctx.closePath();
	Game.ctx.stroke();
};


Obstacle.draw = function(){
	
	Obstacle.num = 0;
	for(var r in Obstacle.all){
		Obstacle.num ++;
		
		Obstacle.all[r].draw();
	}
	
	
	
};
Obstacle.prototype.hitTest = function(x,y){
	var r=this.size/2;
	//console.log("pilka x: "+x+" y "+y+" kwadrat x "+this.x+" y "+ this.y +" r "+ r);
	if(x>=this.x-r&&x<=this.x+r&&y>=this.y-r&&y<=this.y+r)return true;
	
	
	
	
	return false
};
Obstacle.prototype.remove = function(){
	
	
	console.log("usunieto ");
	delete Obstacle.all[this.id];
}

function rand(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	};
