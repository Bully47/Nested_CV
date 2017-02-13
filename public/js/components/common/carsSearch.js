((app)=>{
  'use strict'
   app.component('search',{
          templateUrl:'js/components/common/carsSearch.html',
          controller:['carsServices', '$state', function(carsServices, $state){

              this.filter = (name) => {
              $state.go('cars.list', {
               name: name
       })
       }
     }]
   })

})(require('angular').module('app.common'))
