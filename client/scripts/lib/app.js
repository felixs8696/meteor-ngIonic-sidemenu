// Libs
import angular from 'angular';
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Definer from '../definer';
import RoutesConfig from '../routes';
import MenuCtrl from '../controllers/menu.controller';
import PlaylistCtrl from '../controllers/playlist.controller';
import PlaylistsCtrl from '../controllers/playlists.controller';
import ChatsCtrl from '../controllers/chats.controller';
import Login from '../services/login.service';
import DateFilter from '../filters/date.filter';

// Modules

// App
const App = angular.module('starter', [
  'angular-meteor',
  'ionic'
]);

new Definer(App)
  .define(Login)
  .define(DateFilter)
  .define(ChatsCtrl)
  .define(MenuCtrl)
  .define(PlaylistCtrl)
  .define(PlaylistsCtrl)
  .define(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
}
else {
  angular.element(document).ready(onReady);
}

function onReady() {
  angular.bootstrap(document, ['starter']);
}
