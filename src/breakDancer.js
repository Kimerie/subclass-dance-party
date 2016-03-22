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

  BreakDancer.prototype.lineUp = function(){
    for(var i = 0; i < window.dancers.length; i++){
      if(window.dancers.length < 0){
        console.log(window.dancers[i])
      };
    };
  };