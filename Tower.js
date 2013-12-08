Tower = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, gridPx, gridPx);
   },

   ontouchend: function() {
      this.scene.map.collisionData[this.xGrid][this.yGrid] = 0;
      this.scene.removeChild(this);
   }
});

// REPEAT FOR OTHER TOWER TYPES
GunTower = Class.create(Tower, {
   initialize: function() {
      Tower.call(this);
      this.image = game.assets['images/tower.jpg'];

      this.cost = 10;
      this.rate = 5;
      this.damage = 10;
      this.range = 5;
   }
});