Grid = Class.create(Map, {
   initialize: function(mapdata, coldata) {
      Map.call(this, gridPx, gridPx);
      this.image = game.assets['images/grid.png'];
      this.mapdata = mapdata;
      this.loadData(mapdata);
      this.collisionData = coldata;

      this.cover = new Sprite(gridPx * mapdata[0].length, gridPx * mapdata.length);
      this.cover.image = game.assets['images/transparent.png'];

      var self = this;
      this.cover.addEventListener('touchend', function(e) {
         self.ontouchend(e);
      });
   },

   onaddedtoscene: function() {
      this.scene.addChild(this.cover);
   },

   ontouchend: function(e) {
      if (!this.hitTest(e.x, e.y) && selection > 0) {
         var x = PxToGrid(e.x);
         var y = PxToGrid(e.y);
             
         if (selection === 1 && money >= 50) {
            var tower = new GunTower();
            this.addTower(x, y, tower);
            money -= tower.cost;
            game.currentScene.toolbar.tower1.opacity = .5;
         } else if (selection === 2  && money >= 75) {
            var tower = new FreezeTower();
            this.addTower(x, y, tower);
            money -= tower.cost;
         } else if (selection === 3 && money >= 100) {
            var tower = new ExplosiveTower();
            this.addTower(x, y, tower);
            money -= tower.cost;
         }
      } else {
         if (selection > 0) {
            console.log("CANNOT ADD TO THIS GRIDSPACE");
         } else {
            console.log("NO TOWER SELECTED");
         }
      }
   },

   addTower: function(x, y, tower) {
      tower.x = x * gridPx + 9;
      tower.y = y * gridPx;
      tower.xGrid = x;
      tower.yGrid = y;
      this.collisionData[x][y] = 1;
      this.scene.addChild(tower);
      selection = 0;
      console.log("TOWER ADDED");
   }

});