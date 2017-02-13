((app) => {
    'use strict'
    app.component('carsItem', {
        bindings: {
            editMode: "<"
        },
        templateUrl: '/js/components/carsItem/carsItem.html',
        controller: ['ownersServices', 'carsServices', '$stateParams', '$state', function(ownersServices, carsServices, $stateParams, $state) {

            let _previous = {}

            carsServices.getById($stateParams.id).then((res) => {
                // when this request receives response we affect response data to this controller variable post
                this.car = res.data;
            })

            carsServices.getOwner($stateParams.id).then((res) => {
                // when this request receives response we affect response data to this controller variable post
                this.owner = res.data;
            })


            // Call getCurrent() method from UsersService.
            // When this request receive response we affect response data to this controller variable user
            ownersServices.getCurrent().then((res) => {
                this.owner = res.data
            }).catch((err) => {

            })



            this.edit = (car) => {
             if (car.editMode) {
                carsServices.edit(this.car).then((res) => {
                    car.editMode = false
                    this.car = res.data
                })
            } else {
                _previous[this.car._id] = angular.copy(car)
                 car.editMode = true
               }
             }

            // Create delete function.
            // If you want to use in view you can call with $ctrl.delete()
            this.delete = () => {
                // Call delete method form PostsService with post
                carsServices.delete(this.car).then((res) => {
                    // when this request receive response we change state to app.blog.list (redirection to list)
                    $state.go('car.list')
                })
            }

            // Create save function.
            // If you want to use in view you can call with $ctrl.save()


        }]
    })
})(require('angular').module('app.cars'))
