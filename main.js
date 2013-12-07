enchant();

// size of grid boxes
this.gridPx = 30;

window.onload = function() {
   game = new Game(200, 200);

   game.preload(
      'images/icon0.png',
      'images/chara3.png'
   );

   game.onload = function() {
      var map1 = [
         [ 0, 0 ],
         [ 0, 1 ]
      ];
      var grid = new Grid(map1);
      var tower = new GunTower();
      stage = new Stage(grid);
      // game.rootScene.addChild(grid);
      grid.addTower(0, 1, tower);
      game.pushScene(stage);
   };

   game.start();
};