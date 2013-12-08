Grid = Class.create(Map, {
   initialize: function(mapdata) {
      Map.call(this, gridPx, gridPx);
      this.image = game.assets['images/grid_basic.png'];
      this.mapdata = mapdata;
      this.loadData(mapdata);
      this.collisionData = mapdata.slice(0);

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

         if (selection === 1) {
            var tower = new GunTower();
            this.addTower(x, y, tower);
            console.log("TOWER CAN BE ADDED");
         }
      } else {
         console.log("CANNOT ADD TO THIS GRIDSPACE");
      }
   },

   addTower: function(x, y, tower) {
      tower.x = x * gridPx;
      tower.y = y * gridPx;
      tower.xGrid = x;
      tower.yGrid = y;
      this.collisionData[x][y] = 1;
      this.scene.addChild(tower);
      console.log("TOWER ADDED");
   }

});