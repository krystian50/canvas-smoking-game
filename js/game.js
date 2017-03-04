
window.onload = function(){
	playStart();
	Game.init();
}

VAR = {
	fps:60,
	W:0,
	H:0,
	platformX:0,
	platformY:0,
	lastTime:0,
	lastUpdate:-1,
	rand:function(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	
	}
}

Game = {

	init:function(){

		Game.canvas = document.createElement('canvas');
	
		Game.ctx = Game.canvas.getContext('2d');
		
		Game.layout();
	
		window.addEventListener('resize', Game.layout, false);
		
		document.body.appendChild(Game.canvas);
		
		Game.Platform = new Platform();
		Game.Ball = new Ball();
		
		
		for (var i = 0; i < 30; i++) {
			new Obstacle(rand(20,60),rand(30,VAR.W), rand(30,VAR.H/2));
		}
	
		window.addEventListener('keydown', Game.onKey, false);
		window.addEventListener('keyup', Game.onKey, false);


	
		Game.animationLoop();
	},
	
	onKey:function(ev){
		
		if(ev.keyCode==37 || ev.keyCode==39 ){
			
			if(ev.type=='keydown' && !Game['key_'+ev.keyCode]){
				Game['key_'+ev.keyCode] = true;
				if(ev.keyCode==37){
					Game.key_39 = false;
				}else if(ev.keyCode==39){
					Game.key_37 = false;
				}
			}else if(ev.type=='keyup'){
				Game['key_'+ev.keyCode] = false;
			}

		}
	},

	layout:function(ev){
		
		console.log("game");
		VAR.W = window.innerWidth;
		VAR.H = window.innerHeight;
	
		VAR.d = Math.min(VAR.W, VAR.H);
		
		Game.canvas.width = VAR.W;
		Game.canvas.height = VAR.H;
		
		
		
		Game.ctx.fillStyle = 'yellow'
		Game.ctx.strokeStyle = 'yellow'
		Game.ctx.lineWidth = 3
		Game.ctx.lineJoin = 'round'
	},

	animationLoop:function(time){
		requestAnimationFrame( Game.animationLoop );
		
		if(time-VAR.lastTime>=1000/VAR.fps){
			
			
			Game.ctx.clearRect(0,0,VAR.W, VAR.H);
	
			Game.Platform.draw();
			Game.Ball.draw();
			Obstacle.draw();
			VAR.lastTime = time;
		}
	}
}


function rand(min,max){
		return Math.floor(Math.random()*(max-min+1))+min;
	};