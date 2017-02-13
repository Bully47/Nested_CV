((app) => {
    'use strict'
    app.component('userPanel', {
        templateUrl: 'js/components/sidenav/userpanel.html',
        controller: ['ownersServices', '$state', '$log', '$stateParams', function(ownersServices, $state, $log, $stateParams) {
            angular.extend(this, {
                $onInit() {
                    ownersServices.getCurrent().then((user) => {
                        this.owner = user
                    }).catch((err) => {

                    })
                },
                disconnect(owner) {
                    ownersServices.disconnect(owner).then(() => {
                        Materialize.toast('Disconnected', 4000, 'toast-warning')
                        this.user = null
                        $state.reload()
                    })
                }
              })



                                      ownersServices.getCurrent().then((res) => {
                                          this.owner = res
                                          console.log(res);
                                      }).catch(() => {
                                          $state.go('login.connect')
                                      })
        }]
    })

})(angular.module('app.userpanel'))
