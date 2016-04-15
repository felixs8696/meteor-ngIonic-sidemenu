import { Config } from './entities';

export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'client/templates/menu.html',
      controller: 'MenuCtrl as vm'
    })

    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'client/templates/search.html'
        }
      }
    })

    .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/browse.html'
          }
        }
      })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'client/templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'client/templates/playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    });

    this.$urlRouterProvider.otherwise('/app/playlists');
  }
}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
