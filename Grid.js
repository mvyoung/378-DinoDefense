Grid = Class.create(Map, {
   initialize: function(mapdata) {
      Map.call(this, gridPx, gridPx);
      this.image = game.assets['images/icon0.png'];
      this.mapdata = mapdata;
      this.loadData(mapdata);
      this.collisionData = mapdata.slice(0);
   },

   addTower: function(x, y, tower) {
      tower.x = x * gridPx;
      tower.y = y * gridPx;
      tower.xCoord = x;
      tower.yCoord = y;
      this.collisionData[x][y] = 1;
      this.scene.addChild(tower);
   }

});