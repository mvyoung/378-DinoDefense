Bullet = Class.create(Sprite, // extend the sprite class
{
    initialize: function(x, y, target, damage) { //initialization
        Sprite.call(this, 5, 5); //initialize the sprite object
		//console.log("adding bullet at " + x + "  "+ y); 
		this.frame = 0;
		this.x = x; 
		this.y = y;
		this.damage = damage;
		this.target = target;
        
		this.image = game.assets['images/bullet.png']; //load image asset
        this.tl.moveTo(target.x, target.y, 30);
		
		game.currentScene.addChild(this);
		
		
        
    },
	// if the target is not in the same, or gets destoryed, then remove this bullet
    //define the enterframe event listener
    onenterframe: function() {
         if (this.within(this.target, 50)) {
			console.log("before " + this.target.health);
			this.target.health = this.target.health - this.damage;
			console.log("after " + this.target.health);
			if (this.target.health == 0) {
				this.target.remove();
			}
			game.currentScene.removeChild(this);
			delete this;
		 }
		 // not working
		 if (this.x === this.target.x && this.y === this.target.y) {
		    game.currentScene.removeChild(this);
			delete this;
		 } 
		 
	},
});