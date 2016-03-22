var MoonWalker = function(top, left, timeBetweenSteps){
  BreakDancer.call(this, top, left, timeBetweenSteps);
  
};

  MoonWalker.prototype = Object.create(BreakDancer.prototype);
  MoonWalker.prototype.constructor = MoonWalker;

  MoonWalker.prototype.step = function(){
    Dancer.prototype.step.call(this);
    // this.$node.slideDown();
    };

  MoonWalker.prototype.setPosition = function(top, left){
    this.$node = $('<span class ="fireWalker"><img src="src/firewalker.gif"></span>');
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };