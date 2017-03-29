'use strict';
/**
 * @ngdoc function
 * @name smartpensionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the smartpensionApp
 */
angular.module('smartpensionApp').controller('MainCtrl', function ($scope, RegistrationService) {
    var regService = RegistrationService;
    $scope.missingSignatories = false;
    $scope.missingAdmins = false;
    $scope.company = {
        email: ''
        , registration_number: null
        , legal_structure: ''
        , name: ''
        , signatories: []
        , admins: []
    };
    //temp signatory and admin objects
    $scope.signatory = {
        email: ''
        , forename: ''
        , surname: ''
    };
    $scope.admin = {
        email: ''
        , forename: ''
        , surname: ''
    };
    $scope.addSignatories = function (signatory) {
        if (!!signatory.email && !!signatory.forename && !!signatory.surname) {
            $scope.signatoryCheck = false;
            $scope.company.signatories.push(signatory);
            $scope.signatory = {
                email: ''
                , forename: ''
                , surname: ''
            };
        }
        else {
            $scope.signatoryCheck = true;
        }
    };
    $scope.addAdmin = function (admin) {
        if (!!admin.email && !!admin.forename && !!admin.surname) {
            $scope.company.admins.push(admin);
            $scope.admin = {
                email: ''
                , forename: ''
                , surname: ''
            };
        }
        else {
            $scope.adminCheck = true;
        }
    };
    $scope.removeEntity = function (whichOne, entity) {
        var idx = $scope.company[whichOne].indexOf(entity);
        if (idx != -1) {
            $scope.company[whichOne].splice(idx, 1);
        }
    };
    $scope.register = function (company) {
        if (company.signatories.length < 1) {
            $scope.missingSignatories = true;
            return;
        }
        if (company.admins.length < 1) {
            $scope.missingAdmins = true;
            return;
        }
        regService.register(company).then(function (res) {
            if(res.status.toString().startsWith(4)){
                $scope.errors=res.data.errors;
            }else{
                $scope.errors=null;
                $scope.regOk=true;
            }
        }, function (err) {
            $scope.errors = [{title: 'Server Error', detail: 'The server encountered an error, please try again'}]
            console.log(err);
        });
    };
    $scope.hideMessage = function (message) {
        $scope[message] = false;
    }
});