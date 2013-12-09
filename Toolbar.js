Toolbar = Class.create(Sprite, {
   initialize: function(width, height, x, y) {
      Sprite.call(this, width, height);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/toolbar.png'];
   },

   onaddedtoscene: function() {
      this.tower1 = new Tower1(this.x + 200, this.y + 10);
      this.tower2 = new Tower2(this.x + 400, this.y + 10);
      this.tower3 = new Tower3(this.x + 600, this.y + 10);
      this.remove = new Remove(this.x + 20, this.y + 100);
      this.citizenCount = new Citizens(this.x + 20, this.y + 20);
      this.moneyAmount = new Money(this.x + 20, this.y + 50);
      this.scene.addChild(this.citizenCount);
      this.scene.addChild(this.moneyAmount);
      this.scene.addChild(this.remove);
      this.scene.addChild(this.tower1);
      this.scene.addChild(this.tower2);
      this.scene.addChild(this.tower3);
   }
});

Money = Class.create(Label, {
   initialize: function(x, y) {
      Label.call(this, 150, 50);
      this.x = x;
      this.y = y;
      this.text = "Money : " + money;
      this.font = '30px normal';
   },

   onenterframe: function() {
      if (money === 0) {
         this.color = '#FF0000';
      } else {
         this.color = '#000000';
      }
      this.text = "Money : " + money;
   }
});

Citizens = Class.create(Label, {
   initialize: function(x, y) {
      Label.call(this, 150, 50);
      this.x = x;
      this.y = y;
      this.text = "Citizens: " + citizens;
      this.font = '30px normal';
   },

   onenterframe: function() {
      this.text = "Citizens: " + citizens;
      if (citizens === 0) {
         console.log("GAMEOVER");
      }
   }
});

Remove = Class.create(Sprite, {
   initialize: function(x, y) {
      Sprite.call(this, 150, 50);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/remove.png'];
   },

   ontouchend: function() {
      if (remove === 1) {
         remove = 0;
      } else if (remove === 0) {
         remove = 1;
      }
      console.log("REMOVE: " + remove);
   }
});

Tower1 = Class.create(Sprite, {
   initialize: function(x, y) {
      Sprite.call(this, 180, 180);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/tower_menu.png'];
      this.frame = 0;
      this.opacity = .5;
   },

   onenterframe: function() {
      if (selection === 1) {
         this.opacity = 1;
      } else {
         this.opacity = .5;
      }
   },

   ontouchend: function() {
      if (selection !== 1 && money >= 10) {
         selection = 1;
         console.log("SELECTION: " + selection);
      } else if (selection !== 1 && money < 10) {
         console.log("NOT ENOUGH MONEY");
      } else if (selection === 1) {
         selection = 0;
         console.log("DESELECTED");
      }
   }
});

Tower2 = Class.create(Sprite, {
   initialize: function(x, y) {
      Sprite.call(this, 180, 180);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/tower_menu.png'];
      this.frame = 1;
      this.opacity = .5;
   },

   onenterframe: function() {
      if (selection === 2) {
         this.opacity = 1;
      } else {
         this.opacity = .5;
      }
   },

   ontouchend: function() {
      if (selection !== 2 && money >= 10) {
         selection = 2;
         console.log("SELECTION: " + selection);
      } else if (selection !== 2 && money < 10) {
         console.log("NOT ENOUGH MONEY");
      } else if (selection === 2) {
         selection = 0;
         console.log("DESELECTED");
      }
   }
});

Tower3 = Class.create(Sprite, {
   initialize: function(x, y) {
      Sprite.call(this, 180, 180);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/tower_menu.png'];
      this.frame = 2;
      this.opacity = .5;
   },

   onenterframe: function() {
      if (selection === 3) {
         this.opacity = 1;
      } else {
         this.opacity = .5;
      }
   },

   ontouchend: function() {
      if (selection !== 3 && money >= 10) {
         selection = 3;
         console.log("SELECTION: " + selection);
      } else if (selection !== 3 && money < 10) {
         console.log("NOT ENOUGH MONEY");
      } else if (selection === 3) {
         selection = 0;
         console.log("DESELECTED");
      }
   }
});