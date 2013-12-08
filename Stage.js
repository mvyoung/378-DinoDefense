Stage = Class.create(Scene, {
   initialize: function(map) {
      Scene.call(this);

      var toolbar = new Toolbar(200, 800, 800, 0);

      this.map = map;
      this.addChild(map);
      this.addChild(toolbar);
   }
});