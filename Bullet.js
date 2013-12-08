Bullet = Class.create(Sprite, // extend the sprite class
{
    initialize: function(x, y, target) { //initialization
        Sprite.call(this, 64, 64); //initialize the sprite object
		this.frame = 0;
        this.attackTarget = target;
		this.image = game.assets['images/chara1.png']; //load image asset
        this.moveto(target);
		
		
		
        
    },
   
    //define the enterframe event listener
    onenterframe: function() {
		this.moveto(this.attackTarget);
    },
});