((app) => {
  'use strict'


 const file = [() => {
        return {
            restrict: 'E',
            template: '<input type ="file">',
            replace: true,
            transclude: true,
            require: 'ngModel',
            link(scope, element, attr, ctrl) {

                if (!attr.class && !attr.ngClass) {
                    element.addClass('btn');
                }

                let listener = () => {
                    scope.$apply(() => {
                        attr.multiple ? ctrl.$setViewValue(element[0].files) : ctrl.$setViewValue(element[0].files[0])
                    });

                }
                element.bind('change', listener)
            }
        }
    }]







/*    app.directive('myImgUpload', function () {
    return {
        templateUrl: '/tpl.html',
        require: ['^form'],
        restrict: 'E',
        replace: true,
        scope: {
            customModel: '=ngModel',
            fieldName: '&name'
        },
        link: function(scope, elem, attr, controllers) {
            scope.form = controllers[0];
            scope.onFileSelected = function($files, $file, $newFiles, $duplicateFiles, $invalidFiles, $event) {
				console.log('onFileSelected');
            }
            scope.remove = function(){
            	delete scope.customModel;
            }
        }
    };
});*/


/*    app.directive('fichier', file)*/
})(require('angular').module('app', [
  require('angular-ui-router'),
  require('angular-cookies'),
  require('angular-materialize'),
  require('ng-file-upload'),
  'app.config',
  'app.services',
  'app.cars',
  'app.common',
  'app.login',
  'app.userpanel',
  'app.addNew',
  'app.profile',
  'app.mailbox',
  'app.calender'
]))
