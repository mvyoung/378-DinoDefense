Win = Class.create(Scene, {
   initialize: function() {
      Scene.call(this);

      victory = new Victory();
      dim = new Dim();
      this.addChild(dim);
      this.addChild(victory);
   }
});

Victory = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 615, 167);
      this.image = game.assets['images/victory.png'];
      this.x = 200;
      this.y = 400;
   }
});

Dim = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 800, 1000);
      this.image = game.assets['images/transparent.png'];
      this.opacity = 8;
   }
});