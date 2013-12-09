Start = Class.create(Scene, {
   initialize: function() {
      Scene.call(this);

      tutorial = new Tutorial(800, 1000);
      game_title = new Game_title(356, 194);
      option_easy = new Play_Easy(200, 65);
      option_medium = new Play_Medium(200, 65);
      option_hard = new Play_Hard(200, 65)

      this.addChild(tutorial);
      this.addChild(game_title);
      this.addChild(option_easy);
      this.addChild(option_medium);
      this.addChild(option_hard);
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
    this.y = 50;
  }
});

Play_Easy = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, x, y);
    this.image = game.assets['images/level_easy.png'];
    this.x = 350;
    this.y = 300;
  },

  ontouchend: function() {
    game.popScene();

    var easy_map = new Grid(easy, easy_col);
    var stage = new Stage(easy_map);
    game.pushScene(stage);
  }
});

Play_Medium = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, x, y);
    this.image = game.assets['images/level_medium.png'];
    this.x = 350;
    this.y = 400;
  },

  ontouchend: function() {
    game.popScene();

    var medium_map = new Grid(medium, medium_col);
    var stage = new Stage(medium_map);
    game.pushScene(stage);
  }
});

Play_Hard = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, x, y);
    this.image = game.assets['images/level_hard.png'];
    this.x = 350;
    this.y = 500;
  },

  ontouchend: function() {
    game.popScene();

    var hard_map = new Grid(hard, hard_col);
    var stage = new Stage(hard_map);
    game.pushScene(stage);
  }
});