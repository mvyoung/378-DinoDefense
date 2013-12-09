Gameover = Class.create(Scene, {
   initialize: function() {
      Scene.call(this);

      lose = new Lose();
      game.currentScene.addChild(lose);
   }
});

Lose = Class.create(Sprite, {
   initialize: function() {
      Sprite.call(this, 800, 1000);
      this.image = game.assets['images/gameover.png'];
   }
});