var passgen =   angular.module('passgen',   []);

passgen.controller('ctrl1', function($scope)    {
    $scope.randomNum1   =   Math.floor((Math.random()   *   9) +   1);
    $scope.randomNum2   =   Math.floor((Math.random()   *   9) +   1);
    $scope.randomNum3   =   Math.floor((Math.random()   *   9) +   1);
    $scope.randomNum4   =   Math.floor((Math.random()   *   9) +   1);
})