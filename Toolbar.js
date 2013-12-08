Toolbar = Class.create(Sprite, {
   initialize: function(width, height, x, y) {
      Sprite.call(this, width, height);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/toolbar.png'];
   },

   onaddedtoscene: function() {
      var tower1 = new Tower1(this.x + 20, this.y + 50);
      var remove = new Remove(this.x + 20, this.y + 400);
      this.scene.addChild(remove);
      this.scene.addChild(tower1);
   }
});

Remove = Class.create(Sprite, {
   initialize: function(x, y) {
      Sprite.call(this, 150, 50);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/remove.png'];
   },

   ontouchend: function() {
      if (remove === 1) {
         remove = 0;
      } else if (remove === 0) {
         remove = 1;
      }
   }
});

Tower1 = Class.create(Sprite, {
   initialize: function(x, y) {
      Sprite.call(this, gridPx, gridPx);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/tower.jpg'];
   },

   ontouchend: function() {
      if (selection !== 1) {
         selection = 1;
         console.log("SELECTION: " + selection);
      } else {
         selection = 0;
      }
   }
});