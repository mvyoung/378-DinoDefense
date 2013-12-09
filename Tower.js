Tower = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 23, 40);
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
		if ((target != 0 && (this.age - this.lastShot) > this.rate) || !this.hasShot) {
		  // console.log("shooting at " + target.x + " " + target.y);
		   var b = new Bullet(this.x, this.y, target, this.damage, this.bType);
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


// bType =  the type of bullet it will shoot, i.e freeze ect
// REPEAT FOR OTHER TOWER TYPES
GunTower = Class.create(Tower, {
   initialize: function() {
      Tower.call(this);
      this.image = game.assets['images/tower_gun.gif'];
	  this.bType = 0; 
      this.cost = 10;
      this.rate = 100;
      this.damage = 10;
      this.range = 5;
   }
});

FreezeTower = Class.create(Tower, {
   initialize: function() {
      Tower.call(this);
      this.image = game.assets['images/tower_freeze.gif'];
	  this.bType = 1; 
      this.cost = 10;
      this.rate = 100;
      this.damage = 10;
      this.range = 5;
	  this.bType = 1; 
   }
});

ExplosiveTower = Class.create(Tower, {
   initialize: function() {
      Tower.call(this);
      this.image = game.assets['images/tower_explosive.gif'];
	  this.bType = 2; 
      this.cost = 10;
      this.rate = 100;
      this.damage = 10;
      this.range = 5;
	  this.bType = 2;
   }
});