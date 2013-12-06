Tower = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, gridPx, gridPx);
   }

});

// REPEAT FOR OTHER TOWER TYPES
GunTower = Class.create(Tower, {
   initialize: function() {
      Tower.call(this);
      this.image = game.assets['images/chara3.png'];

      this.cost = 10;
      this.rate = 5;
      this.damage = 10;
      this.range = 5;
   }
});