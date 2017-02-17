((app) => {
    'use strict'
    app.component('navbar', {
        templateUrl: 'js/components/common/navbar.html',
        controller: ['carsServices', 'ownersServices', '$state', function($carsServices, ownersServices, $state) {
            angular.extend(this, {

                $onInit() {

                    this.filter = (brand) => {
                        $state.go('cars.list', {
                            brand: brand
                        })
                    }

                    ownersServices.getCurrent().then((user) => {
                        this.owner = user
                    }).catch((err) => {

                    })
                 },
                 disconnect() {
                    ownersServices.disconnect().then(() => {
                        Materialize.toast('Disconnected', 4000, 'toast-warning')
                        this.user = null
                        $state.reload()
                    })
                }

            })
        }]
    })
})(require('angular').module('app.common'))
