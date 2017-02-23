((app)=>{
  'use strict'
  app.component('profile',{
    templateUrl: '/js/components/profile/profile.html',
    controller:['ownersServices','carsServices','$state','$stateParams','$scope', 'Upload',
      function( ownersServices,carsServices,$state,$stateParams,$scope, Upload ){

        angular.extend(this, {

        $onInit() {
                ownersServices.getCurrent().then((user) => {
                    this.owner = user
                }).catch((err) => {

                })
                carsServices.get().then((response) => {
                   this.cars = response.data
                   console.log(this.cars);
               })
          }})
          $scope.submit = function() {
     if ($scope.form.file.$valid && $scope.file) {
       $scope.upload($scope.file);
     }
   };

   // upload on file select or drop
   $scope.upload = function (file) {
       Upload.upload({
           url: 'upload/url',
           data: {file: file, 'username': $scope.username}
       }).then(function (resp) {
           console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
       }, function (resp) {
           console.log('Error status: ' + resp.status);
       }, function (evt) {
           var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
           console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
       });
   };

}
 ]
  })
})(require('angular').module('app.profile'))
