((app)=>{

   'use strict'

   app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
   function($locationProvider, $stateProvider, $urlRouterProvider){
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
				          url: '/',
				          component: 'home'
			       })
             .state('about', {
            	  url: '/about',
                component: 'about'
             })
             .state('contact', {
                redirectTo: 'contact.phone',
                url: '/contact',
                component: 'contact'
             })
             .state('contact.email', {
               url: '/email',
               component: 'contactEmail'
             })
             .state('contact.phone', {
                 url: '^/phone',
                component: 'contactPhone'
             })










        }])
})(require('angular').module('app.config', []))
