'use strict';

/**
 * @ngdoc function
 * @name souljsWebsiteApp.controller:CreatorCtrl
 * @description
 * # CreatorCtrl
 * Controller of the souljsWebsiteApp
 */
angular.module('souljsWebsiteApp')
  .controller('CreatorCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // TODO: Remove this dummy sound creation!
    soul.initSoul();
    soul.createStaticSound();

Ui.P2 = function() {
};

Ui.P2.prototype = Object.create(Ui.prototype);

Ui.P2.prototype.createElement = function() {
  "use strict";
  Ui.prototype.createElement.apply(this, arguments);
  this.addComponent(new Ui.Arc({
    arcWidth: this.width / 10
  }));

  this.addComponent(new Ui.Pointer(this.merge(this.options, {
    type: 'Rect',
    pointerWidth: this.width / 10
  })));

  this.merge(this.options, {arcWidth: this.width / 10});
  var arc = new Ui.El.Arc(this.options);
  arc.setAngle(this.options.anglerange);
  this.el.node.appendChild(arc.node);
  this.el.node.setAttribute("class", "p2");
};

var test = new Knob(document.getElementById('test-knob'), new Ui.P2());

var ui = document.getElementById('test-knob');

ui.addEventListener( 'change', function(event){
	console.log(event);
});


// test.addEventListener( 'change', function(event){
// 	console.log(event);
// });
// var test = document.getElementById('test-knob');

console.log(test);

  });

