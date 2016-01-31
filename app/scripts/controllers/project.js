'use strict';

/**
 * @ngdoc function
 * @name kampsduacApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the kampsduacApp
 */
angular.module('kampsduacApp')
    .controller('ProjectCtrl', function($scope) {
        $scope.projects = [{
            'name': 'Cat Clicker',
            'desc': 'Vanilla Javascript appliction with that counts cat clicks. Built through Udacity\'s Javascript design patterns course.',
            'img_src': 'images/cat.jpg',
            'source': 'https://github.com/Kamps-Duac/cat-clicker',
            'demo': 'https://kamps-duac.github.io/cat-clicker/'
        }, {
            'name': 'Kording',
            'desc': 'Simple Musical Chord reference app.',
            'img_src': 'images/kording-logo.png',
            'source': 'https://github.com/Kamps-Duac/kording',
            'demo': 'https://kamps-duac.github.io/kording/'
        }, {
            'name': 'Mapacious',
            'desc': 'Playing around with Goole Maps API and Yelp',
            'img_src': 'images/mapacious.jpg',
            'source': 'https://github.com/Kamps-Duac/Kamps-Duac.github.io/tree/cat_click_vanilla',
            'demo': 'https://github.com/Kamps-Duac/Kamps-Duac.github.io/tree/cat_click_vanilla'
        }];
    });
