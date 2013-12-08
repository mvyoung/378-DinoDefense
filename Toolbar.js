Toolbar = Class.create(Sprite, {
   initialize: function(width, height, x, y) {
      Sprite.call(this, width, height);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/toolbar.png'];
   },

   onaddedtoscene: function() {
      var tower1 = new Tower1(this.x + 20, this.y + 50);
      var remove = new Remove(this.x + 20, this.y + 400);
      var moneyAmount = new Money(this.x + 20, this.y + 200);
      this.scene.addChild(moneyAmount);
      this.scene.addChild(remove);
      this.scene.addChild(tower1);
   }
});

Money = Class.create(Label, {
   initialize: function(x, y) {
      Label.call(this, 150, 50);
      this.x = x;
      this.y = y;
      this.text = "Money: " + money;
      this.font = '30px normal';
   },

   onenterframe: function() {
      if (money === 0) {
         this.color = '#FF0000';
      } else {
         this.color = '#000000';
      }
      this.text = "Money: " + money;
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
      Sprite.call(this, gridPx, gridPx);
      this.x = x;
      this.y = y;
      this.image = game.assets['images/tower_gun.jpg'];
   },

   ontouchend: function() {
      if (selection !== 1 && money >= 10) {
         selection = 1;
         money -= 10;
         console.log("SELECTION: " + selection);
      } else if (selection !== 1 && money < 10) {
         console.log("NOT ENOUGH MONEY");
      } else if (selection === 1) {
         selection = 0;
         money += 10;
         console.log("DESELECTED");
      }
   }
});