Start = Class.create(Scene, {
   initialize: function() {
      Scene.call(this);

      tutorial = new Tutorial(800, 1000);
      game_title = new Game_title(356, 194);
      play = new Play(197, 67);

      this.addChild(tutorial);
      this.addChild(game_title);
      this.addChild(play);
   }
});

Tutorial = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, x, y);
    this.image = game.assets['images/main_screen.png'];
  }
})

Game_title = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, x, y);
    this.image = game.assets['images/title.png'];
    this.x = 290;
    this.y = 200;
  }
});

Play = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, x, y);
    this.image = game.assets['images/play.png'];
    this.x = 350;
    this.y = 450;
  },

  ontouchend: function() {
    game.popScene();
  }
});