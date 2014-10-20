/*gamma left right beta up down*/
(function(){
  'use strict';

  angular.module('mk-golf')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){

    $scope.reset = function(){
      var random = Math.floor((Math.random() * 100));
      $scope.hole = (random, random, 100, 100);
      console.log('hole', $scope.hole);

    };
    $scope.start = function(){
      var canvas = document.getElementById('ball'),
          ctx    = canvas.getContext('2d'),
          centerX = canvas.width / 2,
          centerY = canvas.height / 2,
          radius = 20;

      if($scope.ball.x > 90){$scope.ball.x = 90;}
      if($scope.ball.x > 90){$scope.ball.x = 90;}
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#003300';
      $scope.ball = canvas;

      drawHole();
      console.log('ball', $scope.ball);

      $interval(function(){
        $scope.ball = $scope.ball;
      }, 1000);
    };
      //navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    function drawHole(){
      var canvas = document.getElementById('hole'),
          ctx    = canvas.getContext('2d');

      ctx.fillRect(20, 20, 100, 100);
      $scope.hole = canvas;
      console.log('hole', $scope.hole);
    }


    window.addEventListener('deviceorientation', function(data){
      $scope.data = data;
      $scope.ball = {x: $scope.data.gamma, y: $scope.data.beta};
      $scope.$digest();
    });

    /*function onSuccess(acceleration){
      $scope.speed = acceleration;
      alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
    }

    function onError(){
      alert('onError!');
    }*/




  }]);
})();
