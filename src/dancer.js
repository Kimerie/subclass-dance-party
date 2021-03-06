// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.setPosition(top, left);
  this._timeBetweenSteps = timeBetweenSteps;
  // this.$node = $('<span class="dancer"></span>');
  this.$node;
  this.step();
};

// console.log(this.$node)

  // use jQuery to create an HTML <span> tag
// Dancer.prototype.constructor = Dancer;

Dancer.prototype.step = function(){
  var that = this;
  //console.log(that)
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(function(){
    that.step()
  }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.$node = $('<span class ="dancer"></span>')
  console.log(this.$node)
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
  // this.$node.css({"top" : top, "left" : left})
// console.log(this.$node.css(styleSettings)
};

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
