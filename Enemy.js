Enemy = Class.create(Sprite, // extend the sprite class
{
    initialize: function(x, y, enemyType) { //initialization
        Sprite.call(this, 64, 64); //initialize the sprite object
		this.frame = 0;
        this.image = game.assets['?.png']; //load image asset
        this.moveSpeed = 2;
		this.health = 1;
		this.isSlowed = false;
		
		
        this.x = x;
        this.y = y;
        this.key = 0;
		
		if (enemyType == 0) {
			this.image = game.assets['?.png'];
			this.movespeed = 2;
			this.health = 10;
		}
		
        game.rootScene.addChild(this);
    },
    remove: function() {
        game.rootScene.removeChild(this);
        delete enemies [this.key]; //TODO: handle this
        delete this;
    },
    //define the enterframe event listener
    onenterframe: function() {
		if (this.isSlowed) {
			this.x += this.moveSpeed/2;
		} else {
			this.x += this.moveSpeed;
		}
        
        if (this.x < -64) {
            this.remove();
        }
    },
});