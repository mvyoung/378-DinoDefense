Bullet = Class.create(Sprite, // extend the sprite class
{
    initialize: function(x, y, target) { //initialization
        Sprite.call(this, 5, 5); //initialize the sprite object
		//console.log("adding bullet at " + x + "  "+ y); 
		this.frame = 0;
		this.x = x; 
		this.y = y;
		this.target = target;
        
		this.image = game.assets['images/bullet.png']; //load image asset
        this.tl.moveTo(target.x, target.y, 30);
		
		game.currentScene.addChild(this);
		
		
        
    },
	// if the target is not in the same, or gets destoryed, then remove this bullet
    //define the enterframe event listener
    onenterframe: function() {
         if (this.within(this.target, 30)) {
			console.log("hit");
			this.target.remove();
			game.currentScene.removeChild(this);
			delete this;
		 }
		 
	},
});