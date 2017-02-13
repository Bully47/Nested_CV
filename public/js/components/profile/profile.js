((app)=>{
  'use strict'
  app.component('profile',{
    templateUrl: '/js/components/profile/profile.html',
    controller:['ownersServices','carsServices','$state','$stateParams',
      function(ownerServices,carsServices,$state,$stateParams ){

          carsServices.get().then((response) => {
           this.cars = response.data
           console.log(this.cars);
       })

    }]
  })
})(require('angular').module('app.profile'))
