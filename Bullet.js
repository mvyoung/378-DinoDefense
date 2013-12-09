Bullet = Class.create(Sprite, // extend the sprite class
{
    initialize: function(x, y, target, damage, bType) { //initialization
        Sprite.call(this, 5, 5); //initialize the sprite object
		//console.log("adding bullet at " + x + "  "+ y); 
		this.frame = 0;
		this.x = x; 
		this.bType = bType;
		this.explosiveRange = 100;
		this.y = y;
		this.damage = damage;
		this.target = target;
		this.tX  =  target.x;
		this.tY = target.y;
        
		if (this.bType == 0) 
			this.image = game.assets['images/bullet.png']; //load image asset
        else if (this.bType == 1) {
			this.image = game.assets['images/ice_shot.png']; //load image asset
	        this.width = 20;
			this.height = 22;
		}
		else if (this.bType == 2)
			this.image = game.assets['images/bullet.png']; //load image asset
		
		this.tl.moveTo(this.tX, this.tY, 15);
		
		game.currentScene.addChild(this);
		
		
        
    },
	// if the target is not in the same, or gets destoryed, then remove this bullet
    //define the enterframe event listener
    onenterframe: function() {
         if (this.within(this.target, 75)) {
			//console.log("before " + this.target.health);
			
			
			
			
			//console.log("after " + this.target.health);
			
			if (this.bType == 1)
			   this.target.freeze(100);
		    else if (this.bType == 2)
			   this.explosiveAttack(); 
			else if (this.bType == 0 )
			   this.target.takeDamage(this.damage);
			
			
			
			game.currentScene.removeChild(this);
			delete this;
		 }
		 // not working
		 //console.log(this.tX + " " + this.tY + "  <>  " +  this.x + "  " + this.y);
		 if (this.tX == Math.round(this.x) && this.tY == Math.round(this.y)) {
		    game.currentScene.removeChild(this);
			delete this;
		 } 
		 
	},
	explosiveAttack: function() {
		for (var i = 0; i < enemies.length; i++) {
		   if (typeof enemies[i] != 'undefined' && this.within(enemies[i], this.explosiveRange)) {
		       new Explosion(enemies[i].x, enemies[i].y);
			  enemies[i].takeDamage(this.damage);
			 
		
			  
		   }		   
		 
		 }
		 
	
	},
});

Explosion = Class.create(Sprite, 
{
	initialize: function(x, y) {
	 Sprite.call(this, 25, 25);
	 this.x = x, 
	 this.y = y;
	 this.frame =  0;
	 this.image = game.assets['images/effect0.png'];
	 game.currentScene.addChild(this);
	},
	
	onenterframe: function() {
      if (this.age % 2 == 0) {
	     this.frame++; 
	   }
		 if (this.frame == 4) {
		    game.currentScene.removeChild(this);
			delete this;
		 }
	  
    }	




});