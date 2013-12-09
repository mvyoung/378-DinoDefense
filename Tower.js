Tower = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 23, 40);
    
	  this.hasShot = false;
	  this.lastShot = 0;
     this.show_radius = 0;
     this.radius = null;
   },
   
   onenterframe: function() {
	   this.shootAtClosest();
   },

   ontouchend: function() {
      if (remove === 1) {
         this.scene.map.collisionData[this.xGrid][this.yGrid] = 0;
         this.scene.removeChild(this);
         remove = 0;
         money += this.cost / 2;
      } else if (this.show_radius === 0) {
         this.show_radius = 1;
         this.radius = new Sprite(this.range, this.range);
         this.radius.context.beginPath();
         this.radius.context.arc(radius / 2, radius / 2, 0, Math.PI * 2, true);
      }
   },
   
   shootAtClosest: function() {
		var target;
		var count = 0; 
		while ((target = this.scan()) && this.bType == 1 && target.isSlowed && count < enemies.length) {
			target = this.scan();
			count++;
	    }               
		// has shot used for first shot, too lazy to think atm.
		if (( target != 0 && (this.age - this.lastShot) > this.rate) || (target != 0 && !this.hasShot)) {
		  // console.log("shooting at " + target.x + " " + target.y);
		   var b = new Bullet(this.x, this.y, target, this.damage, this.bType);
		   this.lastShot = this.age;
		   this.hasShot = true;
		}
	},
   
   scan: function() {

	   for (var i = 0; i < enemies.length; i++) {
	       //console.log("looking at " + enemies[i].x + " " + enemies[i].y);
		   if( typeof enemies[i] != 'undefined' &&this.within(enemies[i], this.range)) {
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
      this.image = game.assets['images/tower_gun.png'];
	   this.bType = 0; 
      this.cost = 50;
      this.rate = 50;
      this.damage = 10;
      this.range = 200;
   }
});

FreezeTower = Class.create(Tower, {
   initialize: function() {
      Tower.call(this);
      this.image = game.assets['images/tower_freeze.png'];
	   this.bType = 1; 
      this.cost = 75;
      this.rate = 50;
      this.damage = 5;
      this.range = 100;
	   this.bType = 150;

   }
});

ExplosiveTower = Class.create(Tower, {
   initialize: function() {
      Tower.call(this);
      this.image = game.assets['images/tower_explosive.png'];
	   this.bType = 2; 
      this.cost = 100;
      this.rate = 200;
      this.damage = 18;
      this.range = 300;
   }
});