Enemy = Class.create(Sprite, // extend the sprite class
{
    initialize: function(gx, gy, enemyType) { //initialization
        Sprite.call(this, 40, 40); //initialize the sprite object
        this.frame = 1;
        //this.image = game.assets['chara1.png']; //load image asset
        this.moveSpeed = 2;
        this.health = 1;
        this.isSlowed = false;
                
        this.gridX = gx;
        this.gridY = gy;
        this.gridXTarget = gx + 1;
        this.gridYTarget = gy;
        this.x = this.gridX * gridPx;
        this.y = this.gridY * gridPx;
        this.healthBar = new Health(this);
        this.key = 0;
        
                
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
      game.currentScene.removeChild(this.healthBar);
      game.currentScene.removeChild(this);
      delete enemies [this.key]; //TODO: handle this
      delete this;
    },
    //define the enterframe event listener
    onenterframe: function() {
        //Move
		if (this.isSlowed) {
			this.x += (this.moveSpeed/2) * (this.gridXTarget - this.gridX);
            this.y += (this.moveSpeed/2) * (this.gridYTarget - this.gridY);
		} else {
			this.x += this.moveSpeed * (this.gridXTarget - this.gridX);
            this.y += this.moveSpeed * (this.gridYTarget - this.gridY);
		}
        //Check if new grid is reached
        //console.log((this.gridXTarget*gridPx) - this.x);
        //console.log((this.gridYTarget*gridPx) - this.y);
        if (Math.abs((this.gridXTarget*gridPx) - this.x) <= this.moveSpeed &&
           Math.abs((this.gridYTarget*gridPx) - this.y) <= this.moveSpeed ) {
           /*for (var i = 0; i < 20; i++)
            console.log(game.currentScene.map.mapdata[this.gridYTarget][this.gridXTarget + 1]);*/
            //Find next direction
            //FYI indices are backasswards
            if (game.currentScene.map.mapdata[this.gridYTarget][this.gridXTarget + 1] == 2 &&
               (this.gridXTarget + 1) != this.gridX) {
               //console.log("right");
               this.gridX = this.gridXTarget;
               this.gridY = this.gridYTarget;
               this.gridXTarget = this.gridXTarget + 1;
               this.gridYTarget = this.gridYTarget;
            } else if (game.currentScene.map.mapdata[this.gridYTarget][this.gridXTarget - 1] == 2 &&
               (this.gridXTarget - 1) != this.gridX) {
               //console.log("left");
               this.gridX = this.gridXTarget;
               this.gridY = this.gridYTarget;
               this.gridXTarget = this.gridXTarget - 1;
               this.gridYTarget = this.gridYTarget;
            } else if (game.currentScene.map.mapdata[this.gridYTarget + 1][this.gridXTarget] == 2 &&
               (this.gridYTarget + 1) != this.gridY) {
               //console.log("down");
               this.gridX = this.gridXTarget;
               this.gridY = this.gridYTarget;
               this.gridXTarget = this.gridXTarget;
               this.gridYTarget = this.gridYTarget + 1;
            } else if (game.currentScene.map.mapdata[this.gridYTarget - 1][this.gridXTarget] == 2 &&
               (this.gridYTarget - 1) != this.gridY) {
               //console.log("up");
               this.gridX = this.gridXTarget;
               this.gridY = this.gridYTarget;
               this.gridXTarget = this.gridXTarget;
               this.gridYTarget = this.gridYTarget - 1;
            }
        }
        
        if (this.x > 840) {
            this.remove();
        }
    },
});

Health = Class.create(Sprite, {
    initialize: function(parent) {
        Sprite.call(this, 30, 5);
        this.parent = parent;
        this.x = parent.x + 5;
        this.y = parent.y - 10;
        this.image = game.assets['images/health_green.png'];
        game.currentScene.addChild(this);
    },

    onenterframe: function() {
        this.x = this.parent.x + 5;
        this.y = this.parent.y - 10;
        console.log("Health Location - x: "+this.x+"  y: "+this.y);
    
        if (this.width < 10) {
            this.image = game.assets['images/health_red.png'];
        }
    }
});
