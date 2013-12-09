Bullet = Class.create(Sprite, // extend the sprite class
{
    initialize: function(x, y, target, damage, bType) { //initialization
        Sprite.call(this, 5, 5); //initialize the sprite object
		//console.log("adding bullet at " + x + "  "+ y); 
		this.frame = 0;
		this.x = x; 
		this.bType = bType;
		this.y = y;
		this.damage = damage;
		this.target = target;
		this.tX  =  target.x;
		this.tY = target.y;
        
		if (this.bType == 0) 
			this.image = game.assets['images/bullet.png']; //load image asset
        else if (this.bType == 1)
			this.image = game.assets['images/bullet.png']; //load image asset
		else if (this.bType == 2)
			this.image = game.assets['images/bullet.png']; //load image asset
		
		this.tl.moveTo(this.tX, this.tY, 30);
		
		game.currentScene.addChild(this);
		
		
        
    },
	// if the target is not in the same, or gets destoryed, then remove this bullet
    //define the enterframe event listener
    onenterframe: function() {
         if (this.within(this.target, 50)) {
			//console.log("before " + this.target.health);
			this.target.health = this.target.health - this.damage;
			//console.log("after " + this.target.health);
			
			if (this.bType == 1)
			   this.target.isSlowed = true;
		    else if (this.bType == 2)
			   this.explosiveAttack(); 
			
			
			
			if (this.target.health == 0) {
				this.target.remove();
			}
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
	     // attack everything within range.
	
	},
});