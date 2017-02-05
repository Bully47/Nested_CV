((app) => {
    'use strict'
    app.component('about', {
        templateUrl: 'js/components/about/about.html',
        controller: ['carsServices','ownersServices', '$stateParams','$state', function(carsServices,ownersServices, $stateParams ,$state) {

          angular.extend(this, {
            $onInit() {


                ownersServices.getCurrent().then((res) => {
                    this.owner = res
                    console.log(res);
                }).catch(() => {
                    $state.go('contact')
                })

                carsServices.get().then((response) => {
                    this.cars = response.data
                    console.log(this.cars);
                })

                if ($stateParams.uniquorn) {
                  carsServices.filter($stateParams).then((response) => {
                        this.cars = response.data
                    })

                } else {
                        carsServices.get().then((response) => {
                        this.ucars= response.data
                    })

                }

            }
        })

        }]
    })
})(require('angular').module('app.about'))
