((app) => {
    'use strict'

    app.service('carsServices', function($http) {
        return {
            get() {
                return $http.get('/api/cars')
            },
            getById(id) {
                return $http.get('/api/cars/' + id)
            },
            add(car) {
                return $http.post('/api/cars', car)
            },
            getUniq() {
                return $http.get('/api/owners')
            },

            getOwner(owner) {
                return $http.get('/api/owners', owner)
            },

            save(car) {

                if (car._id) {
                    // HTTP Request method PUT (update) with param and data (post) to our express API
                    return $http.put('/api/cars/' + car._id, car)
                } else {
                    // HTTP Request method POST (create) with data (post) to our express API
                    return $http.post('/api/cars', car)
                }
            },
            edit(car) {
                return $http.put('/api/cars/' + car._id, car)
            },
            delete(car) {
                return $http.delete('/api/cars/' + car._id)
            },

            upload(image) {
                return new Promise((resolve, reject) => {
                    let url = '/api/upload'
                    let xhr = new XMLHttpRequest()
                    let fd = new FormData()
                    xhr.open("POST", url, true);
                    //  xhr.setRequestHeader("Authorization", $cookies.get('token'));
                    xhr.onreadystatechange = function(e) {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200) {
                                resolve()
                            } else {
                                reject()
                            }
                        }
                    };
                    fd.append('file', image)
                    xhr.send(fd)
                })
            },
            filter(filtre) {
                if (!filtre.name)
                    delete filtre.name
                return $http.get('/api/cars', {
                    params: filtre
                })
            }
        }
    })
})(angular.module('app.services'))
