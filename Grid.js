Grid = Class.create(Map, {
   initialize: function(mapdata) {
      Map.call(this, gridPx, gridPx);
      this.image = game.assets['images/icon0.png'];
      this.mapdata = mapdata;
      this.loadData(mapdata);
   },

   addTower: function(x, y, tower) {
      tower.x = x * gridPx;
      tower.y = y * gridPx;
      this.scene.addChild(tower);
   }

});