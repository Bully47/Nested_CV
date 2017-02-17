((app)=>{
  'use strict'
  app.component('mailbox',{
    templateUrl: '/js/components/mailbox/mailbox.html',
    controller:['ownersServices','carsServices','$state','$stateParams',
      function(ownersServices,carsServices,$state,$stateParams ){

        angular.extend(this, {

        $onInit() {
                ownersServices.getCurrent().then((user) => {
                    this.owner = user
                }).catch((err) => {

                })
            }
          })
      }]
  })
})(require('angular').module('app.mailbox'))
