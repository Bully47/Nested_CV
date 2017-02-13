((app)=>{

   'use strict'

   app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
   function($locationProvider, $stateProvider, $urlRouterProvider){
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/carlist');
    $stateProvider.state('login', {
                    url: '',
                    abstract: true,
                    template: '<login></login>'
                })
                .state('login.connect', {
                    url: '/login',
                    template: '<connect></connect>'
                })
                .state('login.create', {
                    url: '/new/account',
                    template: '<account></account>'
                })
                .state('cars', {
                    templateUrl: `js/components/common/dashboard.html`,
                    url: '',
                    abstract: true
                })
                .state('cars.list', {
                    url: '/carlist',
                    template: '<cars-list></cars-list>'
                })
                .state('cars.new', {
                    template: '<add-car></add-car>',
                    url: '/car/new'
                })
                .state('cars.item', {
                    template: '<cars-item></cars-item>',
                    url: '/car/:id'
                })
                .state('profile', {
                    template: '<profile></profile>',
                    url: '/profile'
                })

          }])
})(require('angular').module('app.config', []))
