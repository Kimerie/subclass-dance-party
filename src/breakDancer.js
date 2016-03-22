var BreakDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  
};

  BreakDancer.prototype = Object.create(BlinkyDancer.prototype);
  BreakDancer.prototype.constructor = BreakDancer;

  BreakDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);
    this.$node.slideDown();
    };

  BreakDancer.prototype.setPosition = function(top, left){
    this.$node = $('<span class ="breakDancer"><img src="src/breakdancer.gif"></span>');
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

