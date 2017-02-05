((app)=>{

   'use strict'

   app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
   function($locationProvider, $stateProvider, $urlRouterProvider){
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
				        url: '/',
                templateUrl: `js/components/common/common.html`
			       })
             .state('about', {
            	  url: '/about',
                template: '<about></about>'
             })
             .state('contact', {
                redirectTo: 'contact',
                url: '/contact',
                template: '<contact></contact>'
             })
             .state('contact.email', {
               url: '/email',
               template: '<contact-email></contact-email>'
             })
             .state('contact.phone', {
                url: '^/phone',
                template:'<contact-phone></contact-phone>'
             })
          }])
})(require('angular').module('app.config', []))
