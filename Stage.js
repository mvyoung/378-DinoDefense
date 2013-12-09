Stage = Class.create(Scene, {
   initialize: function(map) {
      Scene.call(this);
      this.bgm = game.assets['sounds/adventure.wav'];
      this.bgm.play();

      this.toolbar = new Toolbar(800, 200, 0, 800);

      this.map = map;
      this.addChild(map);
      this.addChild(this.toolbar);
   },
   
  onenterframe: function() {
    if(this.bgm.currentTime >= this.bgm.duration ){
        this.bgm.play();
    }
	var eType = Math.floor((Math.random()*3)); //generate random number [0,2]
	    //need  way to generate enemies at random intervals
	   if ((this.age % 75) == 0) {
           for (i = 0; i < 1; i++) {
		      var d = new Enemy(-1, 9, eType);
              d.key = enemyCount++;
		      //this.addChild(d);
			  enemies[d.key] = d;
		   }
		}
	}
});