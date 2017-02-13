((app) => {
    'use strict'
    app.component('carsList', {
        bindings: {},
        templateUrl: 'js/components/carsList/carsList.html',
        controller: ['carsServices', 'ownersServices', '$stateParams', '$state', function(carsServices, ownersServices, $stateParams, $state) {
                angular.extend(this, {
                    $onInit() {


                        ownersServices.getCurrent().then((res) => {
                            this.owner = res
                            console.log(res);
                        }).catch(() => {
                            $state.go('login.connect')
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
                                this.cars = response.data
                            })

                        }

                    }
                })

            }] //dont delete
    }); //dont delete
})(angular.module('app.cars'))
