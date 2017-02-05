((app) => {
  'use strict'
})(require('angular').module('app', [
  require('angular-ui-router'),
  require('angular-cookies'),
  require('angular-materialize'),
  'app.config',
  'app.home',
  'app.common',
  'app.about',
  'app.contact',
  'app.services'
]))
