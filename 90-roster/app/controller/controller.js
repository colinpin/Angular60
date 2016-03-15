<<<<<<< HEAD
app.controller('RosterController', function ($scope, DataService) {
=======
angular.module('myRoster').controller('RosterController', function ($scope, DataService) {
>>>>>>> kenwilcox/master
  $scope.players = [];
  var playerKey = 'players';

  var init = function () {
    var data = localStorage.getItem(playerKey);
    if (data) {
      $scope.players = JSON.parse(data);
    }
  }

  var saveData = function () {
    var players = angular.toJson($scope.players);
    localStorage.setItem(playerKey, players);
  }

  $scope.loadPlayers = function () {
    DataService.loadPlayers();
<<<<<<< HEAD
  };
=======
  }
  
  $scope.loadingPlayers = function () {
    return DataService.loadingPlayers();
  }
  
  $scope.hasPlayers = function () {
    return DataService.playerCount() > 0;
  }
  
  $scope.playerCount = function () {
    return $scope.players.length || DataService.playerCount();
  }
>>>>>>> kenwilcox/master

  $scope.setPlayers = function () {
    $scope.players = DataService.getAllPlayers();
  }

<<<<<<< HEAD
=======
  $scope.getNextPlayers = function (startingIndex, totalCount) {
    var playersToReturn = [];
    for(var i = startingIndex; i < startingIndex + totalCount; i++) {
      playersToReturn.push($scope.players[i]);
    } 
    return playersToReturn;
  }
  
>>>>>>> kenwilcox/master
  $scope.addPlayer = function () {
    
    var player = {
      fullname: $scope.fullname,
      position: $scope.position,
      jersey: $scope.jersey,
<<<<<<< HEAD
=======
      photo: "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/"
>>>>>>> kenwilcox/master
    };

    $scope.players.push(player);
    saveData();

    $scope.fullname = "";
    $scope.position = "";
    $scope.jersey = null;
  };

  $scope.removePlayer = function (index) {
    $scope.players.splice(index, 1);
    saveData();
  }

  init();
});