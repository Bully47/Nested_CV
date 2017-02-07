((app) => {
    'use strict'
    app.component('account', {
        templateUrl: 'js/components/login/account.html',
        controller: ['ownersService', '$state', function(ownersService, $state) {
            let $ctrl = this
            angular.extend(this, {
              create(){
                ownersService.create($ctrl.owner).then((res) => {
                  return ownersService.connect(res.data)
                }).then((owner) => {
                  let toastContent = `Welcome ${owner.firstname} !`
                  Materialize.toast(toastContent, 4000, 'toast-success')
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
