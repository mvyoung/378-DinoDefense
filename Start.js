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
    this.x = 222;
    this.y = 50;
  }
});

Play_Easy = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, x, y);
    this.image = game.assets['images/level_easy.png'];
    this.x = 50;
    this.y = 290;
  },

  ontouchend: function() {
    game.popScene();
    
    //Spawner Settings
    var enemyTypes = [1, 1, 2, 0, 1];
    var numWaves = 5;
    var numEnemiesPerWave = [5, 7, 5, 7, 10];

    var easy_map = new Grid(easy, easy_col);
    var stage = new Stage(easy_map, enemyTypes, numWaves, numEnemiesPerWave);
    game.pushScene(stage);
  }
});

Play_Medium = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, x, y);
    this.image = game.assets['images/level_medium.png'];
    this.x = 300;
    this.y = 290;
  },

  ontouchend: function() {
    game.popScene();
    
    //Spawner Settings
    var enemyTypes = [1, 1, 2, 0, 1];
    var numWaves = 5;
    var numEnemiesPerWave = [5, 7, 5, 7, 10];

    var medium_map = new Grid(medium, medium_col);
    var stage = new Stage(medium_map, enemyTypes, numWaves, numEnemiesPerWave);
    game.pushScene(stage);
  }
});

Play_Hard = Class.create(Sprite, {
  initialize: function(x, y) {
    Sprite.call(this, x, y);
    this.image = game.assets['images/level_hard.png'];
    this.x = 550;
    this.y = 290;
  },

  ontouchend: function() {
    game.popScene();
    
    //Spawner Settings
    var enemyTypes = [1, 1, 2, 0, 1];
    var numWaves = 5;
    var numEnemiesPerWave = [5, 7, 5, 7, 10];

    var hard_map = new Grid(hard, hard_col);
    var stage = new Stage(hard_map, enemyTypes, numWaves, numEnemiesPerWave);
    game.pushScene(stage);
  }
});