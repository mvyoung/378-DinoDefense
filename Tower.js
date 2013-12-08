Tower = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, gridPx, gridPx);
      this.cost = 0;
	  this.hasShot = false;
	  this.lastShot = 0;
   },
   
   onenterframe: function() {
	   this.shootAtClosest(); 
	
   },

   ontouchend: function() {
      if (remove === 1) {
         this.scene.map.collisionData[this.xGrid][this.yGrid] = 0;
         this.scene.removeChild(this);
         remove = 0;
         money += this.cost;
      }
   },
   
   shootAtClosest: function() {
		var target = this.scan();
		// has shot used for first shot, too lazy to think atm.
		if ((target != 0 && (this.age - this.lastShot) > 100) || !this.hasShot) {
		  // console.log("shooting at " + target.x + " " + target.y);
		   var b = new Bullet(this.x, this.y, target);
		   this.lastShot = this.age;
		   this.hasShot = true;
		}
	},
   
   scan: function() {
	   for (var i = 0; i < enemies.length; i++) {
	       //console.log("looking at " + enemies[i].x + " " + enemies[i].y);
		   if( typeof enemies[i] != 'undefined' &&this.within(enemies[i], 200)) {
			  //console.log("looking at " + enemies[i].x + " " + enemies[i].y);
		      return enemies[i];
		   }
	      
	   }
	   return 0;
	
	},
});



// REPEAT FOR OTHER TOWER TYPES
GunTower = Class.create(Tower, {
   initialize: function() {
      Tower.call(this);
      this.image = game.assets['images/tower_gun.jpg'];

      this.cost = 10;
      this.rate = 5;
      this.damage = 10;
      this.range = 5;
   }
});