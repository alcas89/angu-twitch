/**
 * Created by Alfonso on 1/3/2016.
 */
angular.module('anguTwitchApp')
  .factory('twitchService', ['$http', '$q', '$log', function($http, $q, $log){
    var service = {};
    var baseUrl = 'https://api.twitch.tv/kraken/streams';
    service.getStreams = function (language, limit){
      var deferred = $q.defer();
      $http.get(baseUrl + '?broadcaster_language='+ language +'&limit='+ limit).
        success(function(data){
          deferred.resolve(data);
        }).
        error(function(){
          deferred.reject('There was an error');
        });
      return deferred.promise;
    };
    service.getStreamerDetails = function (user){
      var deferred = $q.defer();
      $http.get(baseUrl + '/' + user).
        success(function(data){
          deferred.resolve(data);
        }).
        error(function(){
          deferred.reject('There was an error');
        });
      return deferred.promise;
    };

    service.getChatters = function (user){
      var deferred = $q.defer();
      $http.get('https://tmi.twitch.tv/group/user/' + user + '/chatters').
        success(function(){
          deferred.resolve(data);
        }).
        error(function(){
          deferred.reject('There was an error getting chatters!');
        });
      return deferred.promise;
    };

    return service;
  }]);
