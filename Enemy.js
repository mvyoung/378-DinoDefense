Enemy = Class.create(Sprite, // extend the sprite class
{
    initialize: function(gx, gy, enemyType) { //initialization
        Sprite.call(this, 40, 40); //initialize the sprite object
        this.frame = 0;
        //this.image = game.assets['chara1.png']; //load image asset
        this.moveSpeed = 2; 
        this.isSlowed = false;
                
        this.gridX = gx;
        this.gridY = gy;
        this.gridXTarget = gx + 1;
        this.gridYTarget = gy;
        this.x = this.gridX * gridPx;
        this.y = this.gridY * gridPx;
        this.key = 0;
        
		this.numFrames = 4;
		this.frameRate = 2;
		             
       
		if (enemyType == 0) { //sml enemy
                this.image = game.assets['images/enm_sml.png'];
                this.moveSpeed = 6;
                this.health = 15;
                this.maxHealth = this.health;
				this.numFrames = 4;
				this.frameRate = 2;
        }
		else if (enemyType == 1) { //med enemy
				this.image = game.assets['images/enm_med.png'];
                this.moveSpeed = 4;
                this.health = 30;
                this.maxHealth = this.health;
				this.numFrames = 8;
				this.frameRate = 3;
		}
		else if (enemyType == 2) { //lrg enemy
				this.image = game.assets['images/enm_lrg.png'];
                this.moveSpeed = 2;
                this.health = 100;
                this.maxHealth = this.health;
				this.numFrames = 4;
				this.frameRate = 8;
        }
		else if (enemyType == 4) { //Boss enemy, not yet implemented
				this.image = game.assets['images/enm_lrg.png'];
                this.moveSpeed = 1;
                this.health = 500;
                this.maxHealth = this.health;
				this.numFrames = 4;
				this.frameRate = 12;
		}
		
        this.healthBar = new Health(this);
        game.currentScene.addChild(this);
    },
    remove: function() {
        this.healthBar.remove();
        game.currentScene.removeChild(this);
        delete enemies [this.key]; //TODO: handle this
        delete this;
    },
    //define the enterframe event listener
    onenterframe: function() {
        //animate
		
		if( (this.age % this.frameRate) == 0)
			if( this.frame == (this.numFrames-1) )
				this.frame = 0;
			else
				this.frame++;
				
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
        
        if (this.x > 840) { //dino made it through path
			//CALL function to decrement number of citizens
            this.remove();
        }
    },
});

Health = Class.create(Sprite, {
    initialize: function(parent) {
        Sprite.call(this, 30, 7);
        this.xOffset = 5;
        this.parent = parent;
        this.prevHealth = this.parent.health;
        this.x = parent.x + this.xOffset;
        this.y = parent.y - 8;
        this.image = game.assets['images/health_green.png'];
        game.currentScene.addChild(this);
    },

    onenterframe: function() {
        this.x = this.parent.x + this.xOffset;
        this.y = this.parent.y - 10;
        
        //console.log(this.prevHealth +" "+this.parent.health);
        if (this.prevHealth != this.parent.health) {
            console.log("I've been shot!");
            //this.scale((this.parent.health * 1.0)/this.parent.maxHealth,1);
            this.width = (30 * ((this.parent.health * 1.0)/this.parent.maxHealth));
            //this.healthFG.xOffset = 100;
            this.prevHealth = this.parent.health;
        }
    },
    remove: function() {
        game.currentScene.removeChild(this);
        delete this;
    }
});

HealthBG = Class.create(Sprite, {
    initialize: function(parent) {
        Sprite.call(this, 30, 5);
        this.parent = parent;
        this.prevHealth = this.parent.health;
        this.x = parent.x + 5;
        this.y = parent.y - 10;
        this.image = game.assets['images/health_red.png'];
        game.currentScene.addChild(this);
        this.healthFG = new Health(this.parent);
    },

    onenterframe: function() {
        this.x = this.parent.x + 5;
        this.y = this.parent.y - 10;
        //console.log(this.prevHealth +" "+this.parent.health);
        if (this.prevHealth != this.parent.health) {
            console.log("hi");
            this.healthFG.remove();
            this.healthFG = new Health(this.parent);
            this.healthFG.scale((this.parent.health * 1.0)/this.parent.maxHealth,1);
            //this.healthFG.xOffset = 100;
            this.prevHealth = this.parent.health;
        }
    },
    remove: function() {
        this.healthFG.remove();
        game.currentScene.removeChild(this);
        delete this;
    }
});
