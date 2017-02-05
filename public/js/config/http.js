((app) => {
    'use strict'
    app.config(['$httpProvider', ($httpProvider) => {
        $httpProvider.interceptors.push(['$q', '$injector', '$cookies', ($q, $injector, $cookies) => {
            return {
                request(config) {
                    config.headers = config.headers || {};
                    if ($cookies.get('token'))
                        config.headers.authorization = $cookies.get('token')
                    return config
                },
                responseError(response) {
                    let state = $injector.get('$state')
                    if ( (response.status === 401 || response.status === 403) && state.current.name.indexOf('app.login') === -1 )
                        state.go('uniquorn.list')
                    return $q.reject(response)
                }
            }
        }])
    }])
})(angular.module('app.config'))
