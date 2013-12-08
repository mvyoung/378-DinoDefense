Enemy = Class.create(Sprite, 
{
    initialize: function() {
        Sprite.call(this, gridPx, gridPx); //initialize the sprite object
        this.isSlowed = false;
        this.x = x;
        this.y = y;
        
        this.key = 0;
        
        //game.rootScene.addChild(this); //needed?
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
        
        // Remove if out of view
        if (this.x > 664) {
            this.remove();
        }
    },
});

StandardDino = Class.create(Enemy, {
    initialize: function(x, y) {
        Enemy.call(this);
        this.image = game.assets['chara1.png'];
        this.frame = 0;
        
        this.key = 0;
        
        this.health = 10;
        this.moveSpeed = 4;
        this.isSlowed = false;
        this.x = x;
        this.y = y;
    }
}