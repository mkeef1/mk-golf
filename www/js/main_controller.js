/*gamma left right beta up down*/
(function(){
  'use strict';

  angular.module('mk-golf')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.hole = {};
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight,
        ctx,
        x2 = Math.random()*(WIDTH - 20),
        y2 = Math.random()*(HEIGHT - 20),
        dy = 5,
        dx = 5,
        x  = 0,
        y  = 0;

    $scope.reset = function(){
      var canvas = document.getElementById('screen'),
          ctx    = canvas.getContext('2d');
      ctx.clearRect(0, 0, WIDTH, HEIGHT);

    };
     function circle(x,y,r){
      ctx.beginPath();
      ctx.arc(x, y, r, 0, 2 * Math.PI, true);
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
    }

    function rect(x,y,w,h){
      ctx.clearRect(x, y, WIDTH, HEIGHT);
    }

    function draw(){
      ctx.fillStyle = 'white';
      rect(0, 0, WIDTH, HEIGHT);
      ctx.fillStyle = 'black';
      circle(x2, y2, 20);
      ctx.fillStyle = 'green';
      circle($scope.ball.x, $scope.ball.y, 10);

      x = dx;
      y = dy;
    }


    function init(){
      var canvas = document.getElementById('screen');
      ctx = canvas.getContext('2d');
      }

    window.addEventListener('deviceorientation', function(data){
      $scope.data = data;
      $scope.ball = {x: $scope.data.gamma, y: $scope.data.beta};
      $scope.$digest();
    });

    window.addEventListener('devicemotion', function(speed){
      $scope.speed = {x: speed.accelerationIncludingGravity.x,
        y: speed.accelerationIncludingGravity.y,
        z: speed.accelerationIncludingGravity.z};
      dx += -$scope.speed.x / 2;
      dy += $scope.speed.y / 2;
      $scope.$digest();
    });
    $scope.start = function(){
      init();
      $interval(draw(), function(){
        }, 1000);
    };


  }]);
})();
