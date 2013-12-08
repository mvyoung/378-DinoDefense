Enemy = Class.create(Sprite, // extend the sprite class
{
    initialize: function(x, y, enemyType) { //initialization
        Sprite.call(this, 40, 40); //initialize the sprite object
                this.frame = 1;
        //this.image = game.assets['chara1.png']; //load image asset
        this.moveSpeed = 5;
                this.health = 1;
                this.isSlowed = false;
                this.healthBar = new Health(x + 5, y - 10);
                
                
        this.x = x;
        this.y = y;
        this.gridX = 0;
        this.gridY = 9;
        
                
                if (enemyType == 0) {
                        this.image = game.assets['images/grid.png'];
                        this.movespeed = 2;
                        this.health = 10;
                }
                game.currentScene.insertBefore(this, game.currentScene.toolbar);
        //game..addChild(this);
		enemies[enemies.length] = this;
    },
    remove: function() {
        game.currentScene.removeChild(this);
        delete enemies [this.key]; //TODO: handle this
        delete this;
    },
    //define the enterframe event listener
    onenterframe: function() {
		 if (this.age % 4 == 0) {
			  if (this.isSlowed) {
                        this.x += this.moveSpeed/2;
                        this.healthBar.x += this.moveSpeed/2;
                } else {
                        this.x += this.moveSpeed;
                        this.healthBar.x += this.moveSpeed;
                }
		  }
        
        if (this.x > 840) {
            this.remove();
        }
    },
});

Health = Class.create(Sprite, {
    initialize: function(x, y) {
      Sprite.call(this, 30, 5);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/health_green.png'];
      game.currentScene.addChild(this);
    },

    onenterframe: function() {
      if (this.width < 10) {
        this.image = game.assets['images/health_red.png'];
      }
    }
});
