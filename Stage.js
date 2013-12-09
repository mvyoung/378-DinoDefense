Stage = Class.create(Scene, {
   initialize: function(map, enemyTypes, numWaves, numEnemiesPerWave) {
      Scene.call(this);
      this.bgm = game.assets['sounds/adventure.wav'];
      this.bgm.play();

      this.toolbar = new Toolbar(800, 200, 0, 800);
      
      //Spawning vars
      this.frameDelay = 0;
      this.numWaves = numWaves;
      this.curWave = 0;
      this.enemyTypes = enemyTypes;
      this.numEnemiesPerWave = numEnemiesPerWave;
      this.curEnemyInWave = 0;

      this.map = map;
      this.addChild(map);
      this.addChild(this.toolbar);
   },
   
    onenterframe: function() {
        if(this.bgm.currentTime >= this.bgm.duration ){
            this.bgm.play();
        }
        
        if (this.frameDelay > 0) {
            this.frameDelay--;
        } else if (this.curEnemyInWave < this.numEnemiesPerWave[this.curWave]) {
            //Need to Spawn Enemies
            if ((this.age % 30) == 0) {
                var d = new Enemy(-1, 9, this.enemyTypes[this.curWave]);
                d.key = this.curEnemyInWave;
                enemies[d.key] = d;
                this.curEnemyInWave++;
            }
        } else if (this.curEnemyInWave == this.numEnemiesPerWave[this.curWave] && this.enemiesRemaining() == 0) {
            // Need to move to next round
            this.curEnemyInWave = 0;
            this.curWave++;
            delete enemies;
            enemies = new Array();
            
            // Check for end of wave
            if (this.curWave == this.numWaves) {
                // End the game
            } else {
                this.frameDelay = 450;
            }
        }
    
    
	 /*var eType = Math.floor((Math.random()*3)); //generate random number [0,2]
	    //need  way to generate enemies at random intervals
	   if ((this.age % 75) == 0) {
           for (i = 0; i < 1; i++) {
		      var d = new Enemy(-1, 9, eType);
              d.key = enemyCount++;
		      //this.addChild(d);
			  enemies[d.key] = d;
		   }
		}*/
	},
    
    enemiesRemaining: function() {
        var count = 0;
    
        for (var i = 0; i < enemies.length; i++) {
		   if( typeof enemies[i] != 'undefined') {
		      count++;
		   }
	   }
       
       return count;
    }
});