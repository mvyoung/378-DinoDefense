Stage = Class.create(Scene, {
   initialize: function(map) {
      Scene.call(this);

      var toolbar = new Toolbar(200, 800, 800, 0);

      this.map = map;
      this.addChild(map);
      this.addChild(toolbar);
   },
   
   onenterframe: function() {
	   if (this.age % 200 === 0) {
           for (i = 0; i < 1; i++) {
		      var d = new Enemy(-40, 9 * gridPx, 0);
              d.key = i;
		      //this.addChild(d);
			  enemies[i] = d;
		   }


       }	   
	
	
	},
});