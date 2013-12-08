Enemy = Class.create(Sprite, // extend the sprite class
{
    initialize: function(x, y, enemyType) { //initialization
        Sprite.call(this, 40, 40); //initialize the sprite object
		this.frame = 1;
        //this.image = game.assets['chara1.png']; //load image asset
        this.moveSpeed = 5;
		this.health = 1;
		this.isSlowed = false;
		
		
        this.x = x;
        this.y = y;
        this.gridX = 0;
        this.gridY = 9;
        this.key = 0;
		
		if (enemyType == 0) {
			this.image = game.assets['images/grid.png'];
			this.movespeed = 2;
			this.health = 10;
		}
		game.currentScene.insertBefore(this, game.currentScene.toolbar);
        //game..addChild(this);
    },
    remove: function() {
        game.currentScene.removeChild(this);
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
        
        if (this.x > 840) {
            this.remove();
        }
    },
});