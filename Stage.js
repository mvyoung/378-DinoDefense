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

    // if (this.age % 100 === 0) {
    //   for (i = 0; i < 1; i++) {
		  //   var d = new Enemy(-1, 9, 0);
    //     d.key = i;
		  //   //this.addChild(d);
			 //  enemies[i] = d;
		  // }
    // } else if (citizens <= 0) {
    //   game.currentScene.popScene();
    //   // game.currentScene.pushScene();
    //   game.end();
    // }
	}
});