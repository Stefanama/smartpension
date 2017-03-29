'use strict';
/**
 * @ngdoc service
 * @name smartpensionApp.registration
 * @description
 * # registration
 * Service in the smartpensionApp.
 */
angular.module('smartpensionApp').service('RegistrationService', function ($http) {
    var reg = {};
    var URL = 'https://api.sandbox.autoenrolment.co.uk/companies'
    reg.register = function (body) {
        var company = {
            company: body
        }
        return $http({
            method: 'POST'
            , url: URL
            , data: company
        }).then(function (res) {
            return res;
        }, function (err) {
            console.log('There has been an error with the request.', err.data)
            return err;
        });
    }
    return reg;
});