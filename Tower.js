Tower = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, gridPx, gridPx);
      this.cost = 0;
   },

   ontouchend: function() {
      if (remove === 1) {
         this.scene.map.collisionData[this.xGrid][this.yGrid] = 0;
         this.scene.removeChild(this);
         remove = 0;
         money += this.cost;
      }
   }
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