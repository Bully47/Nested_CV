((app) => {
    'use strict'
    app.component('connect', {
        templateUrl: 'js/components/login/connect.html',
        controller: ['ownersServices', '$state', function(ownersServices, $state) {
            angular.extend(this, {
                connect(owner) {
                    ownersServices.connect(owner).then((res) => {
                        $state.go('cars.list')
                    }).catch((err) => {
                        let toastContent = `Error : ${err.data} !`
                        Materialize.toast(toastContent, 4000, 'toast-error')
                    })
                }
            })
        }]
    })
})(require('angular').module('app.login'))
