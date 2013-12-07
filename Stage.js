Stage = Class.create(Scene, {
   initialize: function(map) {
      Scene.call(this);
      this.map = map;
      this.addChild(map);
   }
});