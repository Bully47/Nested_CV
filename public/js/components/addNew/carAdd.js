((app) => {
    'use strict'
    app.component('addCar', {
        templateUrl: 'js/components/addNew/carAdd.html',
        controller: ['carsServices', 'ownersServices', '$state', '$stateParams',
            function(carsServices, ownersServices, $state, $stateParams) {


                let _previous = {}


                this.save = (car, file) => {

                    carsServices.upload(file)

                    // Call save method form PostsService with post
                  car.picture = `img/${file.name}`



                    carsServices.save(car).then((res) => {
                            // Change editMode value to false
                            this.editMode = false
                            if (!this.car._id) {
                                // if it's new post (when post._id doesn't exist) we affect to post variable response data (post created)
                                this.car = res.data
                            }
                        })
                        /*         ownersServices.update(this.owner).then(() => {
                               Materialize.toast('Saved', 4000, 'toast-warning')
                           })*/
                }


                this.addImg = () => {
                    carsServices.upload(this.cars.picture)
                    this.selectedUser.image = `static/img/${this.cars.picture}`;
                    ownersServices.add(this.car.picture).then((res) => {
                        console.log(res)
                    })
                }


                this.cancel = (car) => {
                    this.car = _previous[car._id]
                }


            }
        ]
    })
})(angular.module('app.addNew'))
